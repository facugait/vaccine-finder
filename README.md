# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local set up

In order to run the application in local you will need to create a `.env` file in the root of the project with the following environment variables:
`REACT_APP_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>`
`REACT_APP_AWS_S3_BUCKET_URL=<AWS_S3_bucket_url>`

The `AWS_S3_bucket_url` is where the data is stored in JSON format with the following structure:

```sh
{
  "practices": [
    {
      "name": "",
      "address": "",
      "phone": "",
      "linkToScheduler": null,
      "location": {
        "lat": 0,
        "lng": 0
      },
      "image": "",
      "description": ""
    }
  ]
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
