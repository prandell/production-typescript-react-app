# Randell Comics

Randell Comics is a scalable, responsive, modern Comic Book shop application built using React@18 + ReduxToolkit@1.8 + Typescript.

The application uses [Firebase](https://firebase.google.com/) for authentication, database and image storage.

The application is deployed using [Netlify](https://www.netlify.com/)

Once [Stripe](https://stripe.com/au) and it's primary react library `stripe/react-stripe-js` support React@18 it will also feature Stripe payment integration (In a test environment)

> <b>The website can be seen live at [here!](https://unrivaled-naiad-04eaf8.netlify.app/)</b>

![alt-text](https://github.com/prandell/randell-comics/blob/main/screenshots/screen-shot.png)

## General Information

I used the following course to help create this application:

- [Complete React Developer in 2022](https://deloittedevelopment.udemy.com/course/complete-react-developer-zero-to-mastery/)

I have also taken notes for all the concepts I learnt or implemented in this project which you can find in `notes.md`

The repository has several branches that represent different concepts/methodologies of I have picked up along the way

- `Feature/context-api`: Uses context files and the native React Context API to manage global application state (Not Merged)
- `Feature/redux`: Uses ReduxToolkit and React Redux to manage global application state (In /main)
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

Aside from installing all npm packages, you will need to create both a Netlify and Stripe account in order to test all the functionality of this application itself, such as being able to host the application and see mock payments in your Stripe console.

You can install the Netlify CLI tool by running `brew install netlify-cli` or `npm install -g netlify-cli`

You must also have an environment variable file such as `.env` that specifies the stripe keys from your Stripe account required to integrate stripe payments:

```
REACT_APP_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
```

### Run

```bash
cd ./randell-comics
npm install
npm run start
```

This will then launch the application within the native web browser on your computer.

### Build

This application is automatically built and deployed from the `main` branch using Netlify integration, however to manually build you can run:

```bash
cd ./randell-comics

npm install
npm run build
```

## Acknowledgements

This simple application was made whilst following the Udemy course below

- All Comic book covers are from Marvel or DC comics and are not my own personal artwork
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Complete React Developer in 2022](https://deloittedevelopment.udemy.com/course/complete-react-developer-zero-to-mastery/)
- [Create React App](https://github.com/facebook/create-react-app).
- [Redux Toolkit](https://redux-toolkit.js.org/)
