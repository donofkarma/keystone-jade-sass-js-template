KeystoneJS/Jade/SASS/JS Template v0.0.1
====================

This is an extension of the [node-jade-sass-js-template](https://github.com/donofkarma/node-jade-sass-js-template) to include the [KeystoneJS](http://keystonejs.com/) CMS.


Getting started
---------------------

### Installation

To use this template you need [node.js](http://nodejs.org/download/) (min v0.10.24), [grunt.js](https://github.com/gruntjs/grunt/wiki/Getting-started) (min v0.4.0) and [MongoDB](https://www.mongodb.org/).

Once these have been set up, you need to install the additional bower and grunt.js dependencies for the template. To do this, run the following in the downloaded root folder:

```shell
bower install && npm install
```

#### Setting up the environment

Create a `.env` file in root of the project and fill in the following values:

```
NODE_ENV=development
COOKIE_SECRET={a random string to encrypt cookies}
MONGO_URI={your mongo connection uri} // can also be MONGOLAB_URI
PORT={the port to listen on} // defaults to 3000, automatically set by paas (e.g. heroku)
```

**This file is ignored by the default .gitignore settings. When you put your project into production, replicate the env variables above and set to the appropriate values.**


### Usage

1) Run the grunt deploy task to compile the included .scss and .js files and copy the image assets to the `public/` directory. This way you won't get 404 errors when loading the project for the first time:

```shell
grunt
```

2) Run the grunt watch task to automatically compile the .scss files and lint the .js when you make changes:

```shell
grunt watch
```

3) Write code!

### Using the build tasks

There are 3 build tasks included in the Gruntfile:

```shell
grunt (test|build|deploy)
```

1. test: this will lint the JS
2. build: this will compile and the CSS and JS and copy the images and fonts to the assets directory
3. deploy: this will run the build task and then minify the CSS, JS and conpress image assets
1. default: this will run the tests and then run the build task

Release History
---------------------

For a full release history, see the [Changelog](https://github.com/donofkarma/keystone-jade-sass-js-template/blob/master/CHANGELOG.md).

License
---------------------

MIT: [https://github.com/donofkarma/keystone-jade-sass-js-template/blob/master/LICENSE_MIT](https://github.com/donofkarma/keystone-jade-sass-js-template/blob/master/LICENSE_MIT)
