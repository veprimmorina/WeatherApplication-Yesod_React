{-# LANGUAGE OverloadedStrings #-}

module Handler.Hello where

import Import
import qualified Data.Text as T

data Recommendation = Recommendation
    { recTitle :: Text
    , recBody :: Text
    }

getHelloR :: Int -> Int -> Text -> Handler TypedContent
getHelloR celcius time weatherDesc = do
    let recommendations = case (celcius, time, weatherDesc) of
                            (c, t, desc)
                                | c >= 25 && t >= 12 && t < 18 ->
                                    [ Recommendation "Beach Time!" "Enjoy the sunny weather by going for a swim at the beach."
                                    , Recommendation "Picnic in the Park" "Grab a blanket and some snacks, and have a lovely picnic in the park."
                                    , Recommendation "Outdoor Sports" "Engage in outdoor activities such as volleyball, frisbee, or soccer."
                                    ]
                                | c > 25 && t >= 6 && t < 10 && desc == "Clouds" ->
                                    [ Recommendation "Morning Jog" "Go for a refreshing morning jog in the cool weather."
                                    , Recommendation "Coffee Break" "Take a leisurely stroll and enjoy a cup of coffee at a nearby cafe."
                                    , Recommendation "Nature Walk" "Explore a local park or trail and immerse yourself in nature."
                                    ]
                                | c > 20 && t >= 8 && t < 20 && desc == "Rain" ->
                                    [ Recommendation "Movie Time!" "Escape the rain by watching a movie at the cinema."
                                    , Recommendation "Art Appreciation" "Visit a museum or art gallery to indulge in cultural experiences."
                                    , Recommendation "Cooking Day" "Stay indoors and experiment with new recipes or bake some delicious treats."
                                    ]
                                | c > 10 && t >= 18 && t < 22 && desc == "Snow" ->
                                    [ Recommendation "Winter Sports" "Hit the slopes and enjoy skiing or snowboarding."
                                    , Recommendation "Snowman Building" "Have fun in the snow by building a snowman with family or friends."
                                    , Recommendation "Hot Chocolate Delight" "Warm up with a cup of hot chocolate and enjoy the snowy view."
                                    ]
                                | c < 10 && t >= 16 && t < 22 && desc == "Snow" ->
                                    [ Recommendation "Indoor Games" "Spend time indoors playing board games or video games with friends."
                                    , Recommendation "Cozy Reading" "Curl up with a good book and enjoy the warmth indoors."
                                    , Recommendation "Movie Marathon" "Watch your favorite movies or binge-watch a new series."
                                    ]
                                | c < 10 && t >= 12 && t < 18 && desc == "Clear" ->
                                    [ Recommendation "Nature Hike" "Put on some warm layers and go for a scenic hike in the clear weather."
                                    , Recommendation "Bonfire Night" "Gather around a bonfire with friends and enjoy some s'mores."
                                    , Recommendation "Photography Expedition" "Capture the beauty of nature with your camera."
                                    ]
                                | c > 15 && t >= 20 && t < 24 && desc == "Mist" ->
                                    [ Recommendation "Evening Stroll" "Take a peaceful walk in the misty atmosphere and enjoy the tranquility."
                                    , Recommendation "Tea Time" "Savor a cup of hot tea while embracing the misty ambiance."
                                    , Recommendation "Indoor Yoga" "Practice yoga indoors and find inner peace."
                                    ]
                                | c < 5 && t >= 10 && t < 14 && desc == "Fog" ->
                                    [ Recommendation "Scenic Drive" "Take a drive through the foggy landscapes and enjoy the mystical views."
                                    , Recommendation "Warm Soup" "Cook a comforting bowl of soup and savor its warmth."
                                    , Recommendation "Board Game Night" "Gather your friends for a cozy board game night indoors."
                                    ]
                                | c >= 10 && c <= 15 && t >= 12 && t < 18 && desc == "Clouds" ->
                                    [ Recommendation "City Exploration" "Take a walk around the city and discover its hidden gems."
                                    , Recommendation "Visit a Cafe" "Find a cozy cafe and enjoy a cup of coffee or tea."
                                    , Recommendation "Shopping Spree" "Spend some time shopping and exploring local stores."
                                    ]
                                | c > 15 && t >= 12 && t < 18 && desc == "Clear" ->
                                    [ Recommendation "Botanical Garden Visit" "Explore the beauty of nature in a local botanical garden."
                                    , Recommendation "Bike Ride" "Enjoy a bike ride and discover new routes in your area."
                                    , Recommendation "Outdoor Photography" "Capture stunning outdoor photos in the clear weather."
                                    ]
                                | c >= 5 && c <= 10 && t >= 16 && t < 22 && desc == "Rain" ->
                                    [ Recommendation "Visit a Museum" "Spend a rainy day visiting a museum or art gallery."
                                    , Recommendation "Baking Time" "Try your hand at baking some delicious treats."
                                    , Recommendation "Home DIY Project" "Take the opportunity to work on a DIY project indoors."
                                    ]
                                | c > 10 && t >= 18 && t < 22 && desc == "Clouds" ->
                                    [ Recommendation "Dinner with Friends" "Organize a dinner gathering with friends at a favorite restaurant."
                                    , Recommendation "Live Music Event" "Attend a live music event or concert in the evening."
                                    , Recommendation "Movie Night at Home" "Invite friends over for a cozy movie night at home."
                                    ]
                                | c >= 15 && c <= 25 && t >= 20 && t < 24 && desc == "Clear" ->
                                    [ Recommendation "Rooftop Bar or Restaurant" "Enjoy the clear evening sky at a rooftop bar or restaurant."
                                    , Recommendation "Night Photography" "Capture stunning night shots of the cityscape."
                                    , Recommendation "Stargazing" "Find a spot away from city lights and observe the stars."
                                    ]
                                | c >= 5 && c <= 10 && t >= 12 && t < 18 && desc == "Rain" ->
                                    [ Recommendation "Visit a Bookstore" "Spend a rainy afternoon browsing books at a local bookstore."
                                    , Recommendation "Cooking Class" "Join a cooking class to learn new recipes and techniques."
                                    , Recommendation "Movie Marathon at Home" "Stay cozy indoors and binge-watch your favorite movies."
                                    ]
                                | c >= 10 && c <= 15 && t >= 16 && t < 22 && desc == "Clouds" ->
                                    [ Recommendation "Indoor Rock Climbing" "Challenge yourself with indoor rock climbing at a local gym."
                                    , Recommendation "Board Game Cafe" "Spend time playing board games at a board game cafe."
                                    , Recommendation "Indoor Trampoline Park" "Have fun and get active at an indoor trampoline park."
                                    ]
                                | c >= 15 && c <= 25 && t >= 12 && t < 18 && desc == "Rain" ->
                                    [ Recommendation "Indoor Art Workshop" "Join an art workshop and unleash your creativity."
                                    , Recommendation "Museum Tour" "Take a guided tour of a museum to learn more about art and history."
                                    , Recommendation "Indoor Spa Day" "Treat yourself to a relaxing day at a spa or wellness center."
                                    ]
                                | c >= 25 && t >= 20 && t < 24 && desc == "Clear" ->
                                    [ Recommendation "Outdoor Barbecue Party" "Gather friends and family for a fun barbecue party."
                                    , Recommendation "Evening Beach Bonfire" "Enjoy a beach bonfire and share stories with loved ones."
                                    , Recommendation "Nighttime Picnic" "Have a romantic picnic under the stars."
                                    ]
                                | c >= 5 && c <= 10 && t >= 18 && t < 22 && desc == "Clouds" ->
                                    [ Recommendation "Trivia Night at a Pub" "Join a pub's trivia night and test your knowledge."
                                    , Recommendation "Indoor Wine Tasting" "Experience a wine tasting session at a local winery or wine bar."
                                    , Recommendation "Live Comedy Show" "Laugh the night away at a live comedy performance."
                                    ]
                                | c >= 15 && c <= 25 && t >= 16 && t < 22 && desc == "Clear" ->
                                    [ Recommendation "Outdoor Concert" "Attend an outdoor concert and enjoy live music."
                                    , Recommendation "Night Market Visit" "Explore a vibrant night market and indulge in local delicacies."
                                    , Recommendation "Outdoor Movie Screening" "Watch a movie under the stars at an outdoor cinema."
                                    ]
                                | c >= 25 && t >= 12 && t < 18 && desc == "Rain" ->
                                    [ Recommendation "Indoor Bowling" "Have a fun bowling session with friends or family."
                                    , Recommendation "Escape Room Challenge" "Put your problem-solving skills to the test in an escape room."
                                    , Recommendation "Indoor Ice Skating" "Enjoy ice skating indoors at an ice rink."
                                    ]
                                | c >= 5 && c <= 10 && t >= 20 && t < 24 && desc == "Clouds" ->
                                    [ Recommendation "Karaoke Night" "Sing your heart out at a karaoke bar with friends."
                                    , Recommendation "Indoor Dance Class" "Learn a new dance style by joining a dance class."
                                    , Recommendation "Game Night" "Invite friends over for a fun-filled game night at home."
                                    ]
                                | c >= 15 && c <= 25 && t >= 12 && t < 18 && desc == "Snow" ->
                                    [ Recommendation "Ski Trip" "Hit the slopes and enjoy skiing or snowboarding."
                                    , Recommendation "Snowshoeing Adventure" "Go on a snowshoeing expedition and explore winter landscapes."
                                    , Recommendation "Indoor Cozy Fireplace" "Create a cozy atmosphere indoors with a fireplace and warm drinks."
                                    ]
                                | c >= 25 && t >= 16 && t < 22 && desc == "Fog" ->
                                    [ Recommendation "Nature Photography in the Fog" "Capture the ethereal beauty of nature in the fog."
                                    , Recommendation "Indoor Yoga and Meditation" "Practice yoga and meditation for relaxation."
                                    , Recommendation "Visit a Spa" "Treat yourself to a spa day and rejuvenate your mind and body."
                                    ]
                                | c >= 5 && c <= 10 && t >= 12 && t < 18 && desc == "Mist" ->
                                    [ Recommendation "Indoor Plant Care" "Spend time nurturing your indoor plants and creating a green oasis."
                                    , Recommendation "Indoor Painting" "Unleash your creativity by painting indoors."
                                    , Recommendation "Indoor Rock Climbing" "Challenge yourself with indoor rock climbing at a local gym."
                                    ]
                                | c >= 15 && c <= 25 && t >= 20 && t < 24 && desc == "Fog" ->
                                    [ Recommendation "Nighttime Photography in the Fog" "Capture the mystical ambiance of the fog at night."
                                    , Recommendation "Indoor Cooking Class" "Learn new cooking techniques and recipes in a cooking class."
                                    , Recommendation "Wine and Cheese Tasting" "Indulge in a wine and cheese tasting experience."
                                    ]
                                | c >= 25 && t >= 18 && t < 22 && desc == "Mist" ->
                                    [ Recommendation "Indoor Spa and Wellness" "Pamper yourself with spa treatments and relaxation therapies."
                                    , Recommendation "Movie Marathon at Home" "Enjoy a cozy movie marathon night with your favorite films."
                                    , Recommendation "Indoor Yoga and Meditation" "Practice yoga and meditation for a peaceful evening."
                                    ]
                                | otherwise ->
                                    [ Recommendation "Indoor Spa and Wellness" "Pamper yourself with spa treatments and relaxation therapies."
                                    , Recommendation "Movie Marathon at Home" "Enjoy a cozy movie marathon night with your favorite films."
                                    , Recommendation "Indoor Yoga and Meditation" "Practice yoga and meditation for a peaceful evening."
                                    ]
    let result = Prelude.map (\rec -> T.unlines [recTitle rec, recBody rec]) recommendations
    return $ toTypedContent $ T.unlines result
