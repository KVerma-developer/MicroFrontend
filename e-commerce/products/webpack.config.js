const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')


module.exports = {
    mode: 'development',
    devServer: {
      port: 8081,
    },
    plugins:[
      new ModuleFederationPlugin({
        name:'products',                       //must be same in host project MFe while importing and webpackConfig.js
        filename:'remoteEntry.js',
        exposes:{
            './ProductsIndex':'./src/index.js' ///aliases file name that mean if you import this file 
                                               // then only this file will sink with host , 
                                               //it will target only this file to get data
        },
    }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
          })
    ]
  };
  