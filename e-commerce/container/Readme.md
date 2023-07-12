# Dependencies for container 
npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon



# sub-project/app execution context
products > src> JS bootstrap.js > ...
10 document.querySelector('#aev-products').innerHTML = products
11
12 // Context/Situation #1
13 // We are running this file in development in isolation
14 // We are using our local index.html file
15 // Which DEFNITELY has an element with an id of 'dev-product:
16 // We want to immediately render our app into that element
17
18
19 // Context/Situation #2
20 // We are running this file in development or production
21 // through the CONTAINER app
22 // NO GUARANTEE that an element with an id of 'dev-products
23 // WE DO NOT WANT try to immediately render the app
We need something to handle context or situation number one
