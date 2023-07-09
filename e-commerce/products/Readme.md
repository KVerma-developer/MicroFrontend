about webpack

after create webpack.config.js
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

