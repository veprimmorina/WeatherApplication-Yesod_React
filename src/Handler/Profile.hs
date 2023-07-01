{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE TypeFamilies #-}
module Handler.Profile where

import Import
import GHC.Generics (Generic)
import Data.Aeson (FromJSON)
import Database.Persist.Sql (SqlBackend)
import qualified Data.Text.Read as TR
import qualified Data.Text as T
import Data.Text.Read (decimal)






getProfileR :: Handler Html
getProfileR = do
    (_, user) <- requireAuthPair
    defaultLayout $ do
        setTitle . toHtml $ userIdent user <> "'s User page"
        $(widgetFile "profile")


postRegisterUserR :: Handler Value
postRegisterUserR = do
    email <- (requireCheckJsonBody :: Handler Email)

    -- The YesodAuth instance in Foundation.hs defines the UserId to be the type used for authentication.
    -- maybeCurrentUserId <- maybeAuthId
    -- let email' = email { emailUserId = maybeCurrentUserId }

    insertedEmail <- runDB $ insertEntity email
    return ""


getGetEmailR :: Handler Value
getGetEmailR = do
    user <- runDB $ selectList [] [Asc EmailId]
    returnJson user

postInserSearchedCityR :: Handler Value
postInserSearchedCityR = do
    user <- (requireCheckJsonBody :: Handler User)

    -- Check if the user already exists in the database
    maybeExistingUser <- runDB $ getBy (UniqueUser (userIdent user))
    
    case maybeExistingUser of
        Just (Entity existingUserId existingUser) -> do
            let passwordInt = case userPassword existingUser of
                                Just password -> case decimal password of
                                    Right (parsedInt, _) -> parsedInt
                                    _ -> 0 -- Default value if parsing fails
                                Nothing -> 0 -- Default value if password is not present
                updatedPassword = T.pack (show (passwordInt + 1))
            runDB $ update existingUserId [UserPassword =. Just updatedPassword]
            returnJson ("City searched modified" :: Text)
        Nothing -> do
            insertedUser <- runDB $ insertEntity user
            returnJson ("City created" :: Text)


getCityByIdentR :: Text -> Handler Value
getCityByIdentR ident = do
    maybeCity <- runDB $ getBy (UniqueUser ident)
    
    case maybeCity of
        Just (Entity _ city) -> returnJson city
        Nothing -> returnJson ("City not found" :: Text)


getGetCitiesR :: Handler Value
getGetCitiesR = do
    user <- runDB $ selectList [] [Asc UserId]
    returnJson user