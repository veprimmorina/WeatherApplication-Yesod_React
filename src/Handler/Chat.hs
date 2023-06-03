module Handler.Chat where

import Import
import Network.HTTP.Simple
import Data.Aeson
import qualified Data.ByteString.Char8 as C8
import Data.CaseInsensitive (CI)
import qualified Data.CaseInsensitive as CI

postChatR :: Handler Value
postChatR = do
    requestBody <- requireJsonBody :: Handler Value
    let apiUrl = "https://api.openai.com/v1/chat/completions"
    let apiKey = "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"
    
    let headers = [(CI.mk $ C8.pack "Authorization", C8.pack $ "Bearer " Prelude.++ apiKey)]
    let request = setRequestHeaders headers $ setRequestBodyJSON requestBody $ parseRequest_ apiUrl
    
    response <- liftIO $ httpJSON request
    let body = getResponseBody response :: Value
    returnJson body

