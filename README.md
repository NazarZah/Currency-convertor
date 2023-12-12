# Currency Converter

A basic React application for currency conversion using real-time exchange rates obtained from the Fixer API.

## Table of Contents

* Features
* Getting Started
* Usage
* Technologies Used
* API Key
* Issues and Contributions
  
## Features

* Convert from one currency to another based on real-time exchange rates.
* Dynamic updates as the user changes the input values or selected currencies.
* Utilizes the Axios library for making API requests.

## Getting Started

1. Clone the repository:
`git clone <repository-url>`

2. Navigate to the project directory:
`cd currency-converter`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm start`

5. Open your browser and visit http://localhost:3000 to view the Currency Converter application.

## Usage

1. Select the input currency and enter the amount you want to convert.
2. Choose the output currency to see the equivalent amount.
3. The application fetches real-time exchange rates from the Fixer API.


## Technologies Used

* React
* Axios for making API requests

### API Key

To use the Fixer API, you need to obtain an API key. Replace the placeholder in the code with your own API key.

`axios.get('http://data.fixer.io/api/latest?access_key=<your-api-key>')`

## Issues and Contributions

Feel free to open issues or contribute to the project through pull requests.
