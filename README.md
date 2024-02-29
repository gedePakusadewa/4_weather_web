### This project idea is generated from ChatGPT
---
## Project desktop preview 
![alt text](https://github.com/gedePakusadewa/4_weather_web/blob/main/1.jpg)
![alt text](https://github.com/gedePakusadewa/4_weather_web/blob/main/2.jpg)
![alt text](https://github.com/gedePakusadewa/4_weather_web/blob/main/3.jpg)
![alt text](https://github.com/gedePakusadewa/4_weather_web/blob/main/4.png)
![alt text](https://github.com/gedePakusadewa/4_weather_web/blob/main/5.png)
![alt text](https://github.com/gedePakusadewa/4_weather_web/blob/main/6.jpg)

## Project mobile preview 

--
# Project Idea: Weather Dashboard

Description:
Create a weather dashboard that allows users to check the current weather and forecast for a given location. The project will involve both front-end and back-end development, integrating with a free weather API.

Key Features:

- User Authentication:
  Allow users to sign up and log in to the platform. This can be a simple email/password authentication system.
- Location Search:
  Implement a search feature that enables users to enter the name or coordinates of a location to get weather information.
- Weather Display:
  Fetch weather data from a free weather API (such as OpenWeatherMap or Weatherstack) based on the user's input.
  Display the current temperature, humidity, wind speed, and other relevant information.
  Provide a visual representation of the weather conditions, such as icons for sunny, rainy, or cloudy weather.
- Forecast:
  Show a multi-day forecast for the selected location.
  Include details like daily highs and lows, precipitation probability, and wind direction.
- User Preferences:
  Allow users to set their preferred units for temperature (Celsius/Fahrenheit), wind speed, etc.
- ~History and Favorites~ (NOT IMPLEMENTED):
  Implement a feature that stores users' search history and allows them to mark locations as favorites.
- Responsive Design:
  Ensure the application is responsive and works well on various devices, such as desktops, tablets, and mobile phones.
- Error Handling: 
  Provide user-friendly error messages for cases like invalid location input or API request failures.

##### Technologies:

- Front-end:
  Use a modern front-end framework like React, Vue, or Angular.
  Utilize HTML, CSS, and JavaScript for the user interface.
  Ref: https://uizard.io/static/9e9f1bfeac21afca096f9e286390cc6e/d9bdf/weather-web-dark-home.png
- Back-end:
  Choose a back-end framework such as Express.js (Node.js), Django (Python), or Spring Boot (Java). 
  Implement RESTful APIs to handle user authentication, location search, and weather data retrieval.
- Database:
  You may not need a database for this project since it's relatively lightweight. However, if you decide to implement features like storing user preferences, you can use a simple database like MongoDB or SQLite.
- APIs:
  Integrate with a free weather API like OpenWeatherMap or Weatherstack for fetching weather data.
- Authentication:
  Use JWT (JSON Web Tokens) or a similar authentication mechanism for securing user accounts(for now only use token auth/autho).
- Deployment(not implemented):
  Deploy your application on platforms like Heroku, Netlify, or Vercel.

Source API -> https://www.weatherapi.com/

##### Day 14
- dashboard
  - fix responsive navbar

issue and solution
-


---
##### Day 13
- ~dashboard~
  - fix style in bottom
  - fix style in air condition
  - fix style in next day forecast
  - fix style in today forecast

issue and solution
- current 6 hour only display 5hour?
  - just add(+) 2 hour in next 6hour function

---
##### Day 12
- ~profile~
  - fit bottom style
  - fit profile component position
  - update color input "city"
- ~add active menu in navbar~
- ~fix background color to full page in every menu~
- ~fix navbar~
  - fix width
  - fix height
- ~setting~
  - fix bottom style
  - add style for setting main component
  - add city based on available city in API
  - REMOVE dark mode
  - add celcius/fahrenheit symbol do dropdown
- dashboard
  - fix style in bottom
  - fix style in air condition
  - fix style in next day forecast
  - fix style in today forecast
  - fix responsive
- update later
  - font color for login/signup, change it to white
  - in dashboard
    - update today forecast and next dat forecast so it will display next +6 hour forecast and next 7 day forecast
    - update degree to fahrenheit if user set it in setting
    - update display country/region just below city name
    - in today forecast, there is bug that it will not show time after 23:00
    - add new paramter in air condition
  - in settings
    - add background color like in dashboard
    - add using kmh or mph
  - in profile
    - add background color like in dashboard
  - add dummy response to minimize call API weather
  - add loading weather in each component when frontend waiting API data
  - REMOVE component/input

issue and solution
  - 

---
##### Day 11:
- ~update style/code login/sign up page~
  - add backgroung image for login/sign up page
  - add new words to general const
  - udpate some color based on color palete bg image
  - fix error when empty login/signup form is submitted
  - add wrong username/password notifications
- analyses what think can be improve
  - add active menu in navbar
  - dashboard
    - fix style in bottom
    - fix style in air condition
    - fix style in next day forecast
    - fix style in today forecast
    - fix responsive
  - setting
    - fix bottom style
    - add style for setting main component
    - add city based on available city in API
    - REMOVE dark mode
    - add celcius/fahrenheit symbol do dropdown
  - profile
    - fit bottom style
    - fit profile component position
    - update color input "city"

Issue and solution
- 

---
##### Day 10 goal:
- make profile work
  - create backend API to update and get data
  - make fecth method to get data from api and display it
  - make username and email can be update by submit button
- running TOKEN authentication
  
Issue and solution
- how to comnbine two serializer?
  - simple answer by just return data with two serializer (https://stackoverflow.com/a/45415165)

--- 
##### Day 9 goal:
- understand the weather api
- migrate from fontawesopme icon to weather app icon
  - the example already in dashboard
  - make it dynamic
- make city and temperature scale work
  
Issue and solution
- onChange select not always updated?
  - need to force select defautl value updated manually
- hopw to get user information based on token?
  - by get token first and then using this token data to user data from library
---
##### Day 8 goal:
- make api for settting
  
Issue and solution
- can get data setting from DB, it get exceptions
  - fix by change seting model name from "setting" to "settingModel"
- 

---
##### Day 7 goal:
- understand the weather api
- start display next 7 day forecast
  - display next day forecast in exact time as today

Issue and solution
- 

---
##### Day 6 goal:
- understand the weather api
- start display today forecast
  - display hour based on response from API not from local browser time
- start display next 7 day forecast

Issue and solution
- do weather API using utc for time key?
- issue in making vlaue between hour today forecast
- isue why data from usestate is empty

---
##### Day 5 goal:
- understand the weather api
- start working on simple UI  profile, and settings
- 

Issue and solution
- None
  
---
##### Day 4 goal:
- understand the weather api
- start working on UI only fo dashboard based on ref picture


Issue and solution
- https://stackoverflow.com/a/10797856

---
##### Day 3 goal:
- check what paged are needed and then create it
  - page dashboard
    - next 7- day forecast component
    - today all day long forecast component
    - main componentn -> display choosen city, display icon weather, display temperature
    - air condition component
  - page settings
    - chooses using celcisius or fahrenheit
    - choose permanent city for user
    - enable darkmode
  - page profile
    - change photo profile
    - change biodata
  - use #030637 as background color
- user can see current weather based on location and forecasted it too
- understand the weather api


Issue and solution
- None

---
##### Day 2 goal:
- fix issue in git ignore when created new init
- update Readme
- create new view to handle weather API
- Init frontend and implement token auth/autho
- Read again the requirement and make next goal

> Feature "User Authentication" DONE

Issue and solution

- https://stackoverflow.com/a/19757964
- https://stackoverflow.com/a/14617309
- https://reintech.io/blog/connecting-to-external-api-in-django

---
##### Day 1 goal:
- create backend
- create Log In, Sign Up, and Log Out with token auth/autho
