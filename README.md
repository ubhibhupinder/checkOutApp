# Project Title

This is a sample checkout application built with reactJS.

## Getting Started

Use git to clone or checkout this Git project https://github.com/ubhibhupinder/checkOutApp.git

### Prerequisites

If you already dont have Node and NPM already, you can  install one from here [Node](https://nodejs.org/en/download/)

### Installing

Foloww the below steps to install dependencies to run this app

Navigate to the folder where the project has been cloned or checkedout
```
C:\Users\username\Desktop>cd checkoutApp

C:\Users\username\Desktop\checkoutApp>npm init
```

Run the following command to install dependencies

```
C:\Users\username\Desktop\checkoutApp>npm install
```

Install the following Babel Plugins

```
C:\Users\username\Desktop\checkoutApp>npm install babel-core

C:\Users\username\Desktop\checkoutApp>npm install babel-loader

C:\Users\username\Desktop\checkoutApp>npm install babel-preset-react

C:\Users\username\Desktop\checkoutApp>npm install babel-preset-es2015
```

Next update the webpack.config.js file to set the correct port for your app to run on. I am currently running on 7777

```
var config = {
   entry: './main.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
```

Now run the npm start command to start the server

```
C:\Users\username\Desktop\checkoutApp>npm start
```

If everything goes well you should see a screen like this
[[https://github.com/ubhibhupinder/checkOutApp/screnshot/app-home.png|alt=checkoutApp]]