module Handler.News where
import Import
import Network.HTTP.Simple
import Data.Aeson
import Data.Time (addDays)
import Data.Text (pack, unpack)
import Data.Time.Clock (UTCTime, getCurrentTime, addUTCTime)
import Data.Time.Calendar (addDays)
import Data.Time.Format (defaultTimeLocale, formatTime, iso8601DateFormat)


getNewsForWeatherR :: Handler Value
getNewsForWeatherR = do
    let apiKey = "98a6df6ca66a4e18b281833fa7ca0bca"
    let url = "https://newsapi.org/v2/everything?q=weather&apiKey=" Prelude.++apiKey

    response <- liftIO $ httpJSON $ parseRequest_ url
    let body = getResponseBody response :: Value
    returnJson body