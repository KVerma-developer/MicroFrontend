about webpack

after create webpack.config.js *import dont add space or else
change package.json - script:test into "start": "webpack"
npm run start
after that automatically will be create a new dir dist


bundle.js==main.js in dist after webpack configure


# webpack server
configuration for development mode with hot reload and source maps enabled
is as follows :
in webpackconfig.js add 
devServer:{
    port:8081
    }

and then add in "start" :'webpack serve'
http://localhost:8080/main.js then you got 


# html-webpack-plugin
after add this plugins able to render out public/index.html which is main file our http://localhost:8081



# dependencies for further use
Important Versions Update for Container
In the upcoming lecture, we will be installing our dependencies for the container project. Similar to the products project, we will need to install slightly different versions.

Working versions can be installed by running the following instead:

npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon






