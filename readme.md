# Nomad Framework v 1.2 #

## Authors: ##
* Ivan Duch: Overall Development.
* Jesus Lugo: Development and Consultation.

### Created using Jekyll and Foundation. ###
For more information visit https://2nomads.org.

## The present framework includes:

JS concatenation, sass, js, image and css minification, cache busting and auto-prefixers. It's using Gulp, Jekyll and Foundation 6.3.

## Development

To get set up for developing you will need:

### Dependencies
 - ruby/Jekyll
 - Jekyll Dependencies: https://jekyllrb.com/docs/installation/
 - node/npm

## To setup a development environment run:

 - In the project folder run npm install and bundle install, this will install all the necessary Gems in your system and the node modules in the project folder.

## Development

- Running the command `gulp dev` in the root folder will offer sass compilation, js concatenation, minification, auto-prefixers and browsersync.

### JS usage

the correct place to add new scrips would be `_assets/js/scripts` folder. You just need to create a .js file for your new script and Gulp concatenates the script inside scripts.min.js

## Deploying

To deploy a new version of the site you need to:

1. Run `gulp production`
2. Commit your changes and any changes made to the minified css or js.

Note: A new version will only deploy if you make a commit to the master branch. All other branches will not be deployed.

## Checklist

* Foundation variables and settings should be changed in 'settings.scss'. Brand colors, and general styles should be defined through Foundation.
* Keywords, titles and other SEO related configuration and more are configured through config.yml in the root folder.
* There are several modules included and more in the way that can be added to pages through the usage of Liquid.

## Authors: ##
* Ivan Duch: Overall Development.
* Jesus Lugo: Development & Consultation.

### Created using Jekyll and Foundation. ###
For more information visit http://2nomads.org.
