module Handler.Weather where
import Import
import Network.HTTP.Simple
import Data.Aeson

getWeatherR :: String -> Handler Value
getWeatherR city = do
    let apiKey = "4e5f58fac84442d0fa4d5696683c77f2"
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" Prelude.++ city Prelude.++ "&appid=" Prelude.++ apiKey

    response <- liftIO $ httpJSON $ parseRequest_ url
    let body = getResponseBody response :: Value
    returnJson body
