### `Video-Slots 😎`

### Developed by Deepak Kumar (deepak300811@gmail.com)

### Available at https://videoslotsbydeepak.netlify.app/ 🚀

# Third party / Helper libraries used in this project ❤️

1. React - A JS Library
2. Axios -  A third party package for making network requests. (just personal preference in this case, fetch API can also be opted)

# Architecture of the project 🎁

1. A App conponent holds all the view of the application. View the application has two parts - 1. Header and 2. ImagesContainer.
2. Whole app is devided into components, all components are available in a separate components folder. Components used in this webapp are Error, Header, Error, ImagesContainer, Loader, and SingleImage. 
3. Header is a component where imagesPerPage field and search field is present, the change in inputs causes the api to be called and data is otained in App main container then this data is fed to ImagesContainer component which generates the grid or list of SingleImage components as per the user requirement.
4. Have not used any state management system because of the scope of this project. All the state have been managed from the App component for simplicity and also because of the time constraints. 

# Features Developed🙋🏻‍♂️

1. `Responsive design, works on mobile and tablets` - Based on the usecase each website that is made, it has to work perfectly on various screen sizes, otherwise customer satisfaction will suffer. So have taken this on highest priority and implemented this story.
2. `Use modern CSS throughout the application (css-grid and flexbox)` - Css grid makes it easier to manage view in a 2 dimentional space, also it helps in maintaining consistant and neat views on varying screen sizes. Like in our example we are showing grid of 5 image cards on large screen, and then 3 and then 2, then 1 employee in a row based on screen size. This all can happen easily with Grids.
3. `Filter by author name` - Implementing filter by author name gave me an opportunity to showcase how i can handel different state changes based on the user selection. 
4. `Debounced Images per page change and previoud, next page selection` - To limit the server hits on each and every key stroke, I have used concepts like debouncing, which will help sheding the server loads.
5. `Available on a free public url (Netflix)` - What is the use of a webapp developed by you, if you can't show it off outside of your machine ? This was the motivation behind making the developed webapp available on the public url.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
