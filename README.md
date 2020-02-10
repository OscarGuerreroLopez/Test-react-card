This is a test I did for a company in 24 hours

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Check the To Do list at the end

Before you run this please make sure you got the server installed and running at https://bitbucket.org/oscar_computer_guy/card_node/src/master/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

After running npm run build you can fire up server.js with node and see the page at port 4200

## To Do

We should also apply some checking for the form fields to make sure the correct data is sent to the server. The server will reject any wrong values,
but still is is better not to make the call to the server until we know everything is ok.
