{-# LANGUAGE OverloadedStrings #-}

module Handler.Hello where

import Import
import qualified Data.Text as T

getHelloR :: Handler T.Text
getHelloR = return $ T.pack "helloo Boss"


