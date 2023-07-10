const HtmlWebpackPlugin =require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
    mode : 'development',
    devServer:{
        port : 8080
    },

    plugins:[
        new ModuleFederationPlugin({
            name:'container', ///there is host but must be need for remotes MFe(microfrontends)
            remotes:{
                productsApp:'products@http://localhost:8081/remoteEntry.js' //url for the remote entry file
                   //        |_______________________> related to name in Product project webpack.config.js
            },


        }),

        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}