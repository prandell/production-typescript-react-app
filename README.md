# Randell Comics

This is a sample production-scale Comic Book shop website built using React@18 + ReduxToolkit@1.8 + Typescript

> <b>The website can be seen live at [here!](https://unrivaled-naiad-04eaf8.netlify.app/)</b>

![alt-text](https://github.com/prandell/randell-comics/blob/main/screenshots/screen-shot.png)

## General Information

I used the following course to help create this application:

- [Complete React Developer in 2022](https://deloittedevelopment.udemy.com/course/complete-react-developer-zero-to-mastery/)

The repository has several branches that represent different concepts/methodologies of I have picked up along the way

- `Feature/context-api`: Uses context files and the Context API to manage global application state (Not Merged)
- `Feature/redux`: Uses ReduxToolkit and React Redux to manage global application state
- `Feature/stripe`: Integrates Stripe and Netlify serverless functions into our checkout. (Not Merged)
  > `@stripe/react-stripe-js` Does not currently support React@18. Monitor https://github.com/stripe/react-stripe-js/issues/273 for updates!

## Table of Contents

- [Randell Comics](#Randell-Comics)
  - [General Information](#general-information)
  - [Table of Contents](#table-of-contents)
  - [Technology Used](#technology-used)
  - [Setup](#setup)
    - [Run](#run)
    - [Build](#build)
  - [Acknowledgements](#acknowledgements)

## Technology Used

Notable technologies are `React@18`, `ReduxToolkit@1.8.1`, `Typescript`, `ReactRouter@6`, `Firebase@9`, `ReactStripe`, `StyledComponents@5`

- `react`: ^18.0.0
- `typescript`: ^4.6.3
- `react-dom`: ^18.0.0
- `react-router-dom`: ^6.3.0
- `reduxjs/toolkit`: ^1.8.1
- `redux-persist`: ^6.0.0
- `redux-logger`: ^3.0.6
- `stripe/react-stripe-js`: ^1.7.2
- `stripe/stripe-js`: ^1.29.0
- `firebase`: ^9.6.11,
- `web-vitals`: ^2.1.4
- `styled-components`: ^5.3.5
- `sass`: ^1.50.0
- `react-scripts`: 5.0.0
- `@types/node`: ^16.11.26
- `@types/react`: ^18.0.5
- `@types/react-dom`: ^18.0.1
- `@types/react-router`: ^5.1.18
- `@types/react-router-dom`: ^5.3.3
- `@types/styled-components`: ^5.1.25
- `@types/redux-persist`: ^4.3.1
- `@types/jest`: ^27.4.1
- `testing-library/jest-dom`: ^5.16.3
- `testing-library/react`: ^12.1.4
- `testing-library/user-event`: ^13.5.0

## Setup

To be continued

### Run

```bash
cd ./randell-comics
npm install
npm run start
```

This will then launch the application within the native web browser on your computer.

### Build

```bash
cd ./randell-comics

npm install
npm run build
```

## Acknowledgements

This simple application was made whilst following the Udemy course below

- All Comic book covers are from Marvel or DC comics and are not my own personal artwork
- [Complete React Developer in 2022](https://deloittedevelopment.udemy.com/course/complete-react-developer-zero-to-mastery/)
- [Create React App](https://github.com/facebook/create-react-app).
- [Redux Toolkit](https://redux-toolkit.js.org/)
