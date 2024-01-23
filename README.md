### This project idea is generated from ChatGPT
---
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
- History and Favorites:
  Implement a feature that stores users' search history and allows them to mark locations as favorites.
- Responsive Design:
  Ensure the application is responsive and works well on various devices, such as desktops, tablets, and mobile phones.
- Error Handling: 
  Provide user-friendly error messages for cases like invalid location input or API request failures.

##### Technologies:

- Front-end:
  Use a modern front-end framework like React, Vue, or Angular.
  Utilize HTML, CSS, and JavaScript for the user interface.
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
---
##### Day 2 goal:
- fix issue in git ignore when created new init
- update Readme
- create new view to handle weather API
- Init frontend
Issue and solution
- https://stackoverflow.com/a/19757964
- https://stackoverflow.com/a/14617309
- https://reintech.io/blog/connecting-to-external-api-in-django

---
##### Day 1 goal:
- create backend
- create Log In, Sign Up, and Log Out with token auth/autho 
