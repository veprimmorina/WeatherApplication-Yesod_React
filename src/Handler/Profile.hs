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