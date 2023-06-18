module Handler.Weather where
import Import
import Network.HTTP.Simple
import Data.Aeson
import Data.Time (addDays)
import Data.Text (pack, unpack)
import Data.Time.Clock (UTCTime, getCurrentTime, addUTCTime)
import Data.Time.Calendar (addDays)
import Data.Time.Format (defaultTimeLocale, formatTime, iso8601DateFormat)


getWeatherR :: String -> Handler Value
getWeatherR city = do
    let apiKey = "4e5f58fac84442d0fa4d5696683c77f2"
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" Prelude.++ city Prelude.++ "&appid=" Prelude.++ apiKey

    response <- liftIO $ httpJSON $ parseRequest_ url
    let body = getResponseBody response :: Value
    returnJson body

getWeatherTomorrowR :: String -> Handler Value
getWeatherTomorrowR city = do
    let apiKey = "4e5f58fac84442d0fa4d5696683c77f2"
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=" Prelude.++ city Prelude.++ "&appid=" Prelude.++ apiKey

    response <- liftIO $ httpJSON $ parseRequest_ url
    let body = getResponseBody response :: Value
    returnJson body

getAirPolutionR :: String -> String -> Handler Value
getAirPolutionR latitude longitude = do
    let apiKey = "4e5f58fac84442d0fa4d5696683c77f2"
    let url = "https://api.openweathermap.org/data/2.5/air_pollution?lat=" Prelude.++ latitude Prelude.++ "&lon=" Prelude.++ longitude Prelude.++ "&appid=" Prelude.++ apiKey

    response <- liftIO $ httpJSON $ parseRequest_ url
    let body = getResponseBody response :: Value
    returnJson body

