# Cicada FE Challenge 2022

This is a React application that displays trading information in various forms, including a graphical one by using the Recharts library.
Challenge description: https://mtrade.notion.site/FE-Developer-Challenge-Sept-2022-233ab0fd31aa4019b7bb14930e4c5a2b

## Objective

The objective of this app is to fetch data from a Web Socket and some APIs to display it using various components. The application is responsive and visually appealing.

## Technologies Used

- Node.js (https://nodejs.org/en)
- React (https://react.dev/)
- Recharts (https://recharts.org/en-US/)

## Installation

To run this app on your local machine, follow these steps:

1. Clone this repository using `git clone https://github.com/Zemelka27/cicada-react-fe-challenge-2022.git`.
2. Change your current directory to the project directory using `cd react-cicada-fe-challenge-20222`.
3. Install dependencies by running `npm install`.
4. Run the app using `npm start`.
5. IN ORDER FOR THE APP TO PROPERLY WORK, YOU WILL HAVE TO DISABLE "HTTPS ONLY" IN YOU BROWSER, SINCE THE WEBSOCKET DOES NOT HAVE A CERTIFICATION.   

## Usage

 The user can switch between the different currency pair, which will display information according to it. The banner displays real time information which changes every 3-5 seconds, the tables can be sorted according to different parameters, and the graphs can be activated or deactivated in order to take advantage of the GUIs real estate, also while hovering over the graphs the user is able to see detailed information of every single point on it.

## Screenshot

![Screenshot 1](/public/assets/screenshot.png)

<!-- ## Live Demo

You can view a live demo of this app [here](https://your-username.github.io/react-recharts-app). -->

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
