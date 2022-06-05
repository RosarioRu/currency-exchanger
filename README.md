# _Currency Exchanger_

#### By _**Rosario Ruvalcaba**_

#### _This program takes user input for USD amount and the currency they wish to convert it to, then returns the converted amount in that currency. The program makes an API call to https://www.exchangerate-api.com/ in order to convert the currency with up-to-date exchange rates._

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

_The Currency Exchanger was created while studying Asynchrony and APIs in Epicodus. The project makes API calls to ExchangeRate-API's 'Pair ExchangeRate-API endpoint'. User input is collected for the amount they wish to convert as well as the currency they want to convert it to. The object returned contains the conversion result which is then displayed to the user after being parsed. The amount is displayed with two decimal places.

If an error occurs, an error message is also displayed for the user in order to provide guidance for another attempt at exchange. Errors are handled by utilizing the promise object with rejected/failed state. Errors due to an invalid API key, unavailable currency code and codes not entered in the proper format (3 letters) produce additional messages to the user. 

The project utilizes a .env file which is listen in the .gitignore file in order to maintain API key security. Plugin for Dotenv is included in the webpack configuration to facilitate the code being used while hidden in the .env file._

## Setup/Installation Requirements

* _Clone repository from Github and save a copy on own computer_

* _Navigate to the .gitignore file and verify that the list of files includes a one named .env. You will store your API key in the .env file shorty, so it is crucial that you keep the file from being pushed to github to keep the key secure_

* _Make an initial commit pushing ONLY your .gitignore file_

* _Navigate to the root level of the cloned project's directory on your computer and crate the file named .env. The file is meant for environmental variables that you want to keep hidden. This is where the API key must be stored in order to ensure it is not pushed to github._

* _Visit the [ExchangeRate-API site](https://www.exchangerate-api.com/). Enter your email address and click the "Get Free Key" button. You'll then set up an account with your email, first name and a password. Agree to the terms of use and click "Get Started! Access the dashboard in the website and copy your API key. You can also see your remaining API calls for the month in the dashboard_

* _Store your ExchangeRate API key in the .env file. Note that the key is not a string, so don't use quotes or backticks. Simply enter the key after creating a variable to hold it followed by an equals sign. Make sure to name it API\_KEY so the embedded expressions in the file 'src/currencies-service.js' work properly (or update the code to the name you choose if you want to call your API key something else). Here is an example with a fake key: API_KEY=01010101010101010110101_

* _

*






* _(See Github page for this project](https://rosarioru.github.io/UPDATE/)_

## Known Bugs

* _update_

## License

MIT License

Copyright (c) _MONTH_YEAR_ _Rosario Ruvalcaba Harwood_