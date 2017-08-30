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

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
