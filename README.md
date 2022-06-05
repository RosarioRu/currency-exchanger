# _Currency Exchanger_

#### By _**Rosario Ruvalcaba**_

#### _This program takes user input for USD amount and the currency they wish to convert it to, then returns the converted amount in that currency. The program makes an API call to ExchangeRate-API in order to convert the currency with up-to-date exchange rates._

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Webpack_
* _Dotenv-webpack for API key security_
* _Please see package.json file for a more thorough list of project dependencies_

## Description

_The Currency Exchanger was created while studying Asynchrony and APIs in Epicodus. The API calls are to ExchangeRate's 'Pair ExchangeRate-API endpoint'. User input is collected for the USD amount as well as the currency they want to convert it to. The result is displayed for the user after being parsed._

_If an error occurs, an message is displayed for the user in order to provide guidance for a next attempt. Errors are handled by utilizing the promise object with rejected/failed state. Errors due to an invalid API key, unavailable currency code and codes not entered in the proper format (3 letters) produce additional messages to the user._

_The project utilizes a .env file which is listed in the .gitignore file in order to maintain API key security. Plugin for Dotenv is included in the webpack configuration to facilitate the code being used while hidden in the .env file._

## Setup/Installation Requirements

* _Clone repository from Github and save a copy on own computer_

* _Verify that .env is included in the list inside of the .gitignore file. You will store your API key in the .env file shorty, so it is crucial that you keep the file from being pushed to github by listing it in the .gitignore file_

* _Make an initial commit pushing ONLY your .gitignore file_

* _Navigate to the root level of the cloned project's directory on your computer and create the file named .env. The file is meant for environmental variables that you want to keep hidden. This is where the API key must be stored in order to ensure it is not pushed to github._

* _Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/). Enter your email address and click "Get Free Key" button. Then set up an account with your email, first name and a password. Agree to the terms of use and click "Get Started!" You can now find your API key in the dashboard as well as your remaining API calls_

* _Store your ExchangeRate API key in the .env file. Ddon't use quotes or backticks. Simply enter the key after creating a variable to hold it followed by an equals sign. Make sure to name it API\_KEY so the embedded expressions in the file 'src/currencies-service.js' work properly (or update the code to the name you choose if you want to call your API key something else). Here is an example with a fake key: API_KEY=01010101010101010110101_

* _Using your terminal, navigate to the root level of the cloned project's directory and enter: $ npm install. This will install the dependencies required for this project. It will also create the nodes_modules directory which will contain the actual packages and dependencies, as well as a list of these downloads in the package-lock.json file._

* _Next enter the command $ npm run build. This will bundle all the code into the dist directory inside the bundle.js file. A file called index.html will also be created in this directory, which you can open by right-clicking and selecting 'Open With Live Server.' This is how you can view the page for the project._

* _You may also enter the command $ npm run start, which will open a webpack dev server and create and build the dist directory at the same time. To exit this command in the terminal press Ctrl+C._

* _The live-server shoud now be ready to take user input and display currency exchange results._

## Known Bugs

* _No known bugs_

## License

MIT License

Copyright (c) _June_2022_ _Rosario Ruvalcaba Harwood_