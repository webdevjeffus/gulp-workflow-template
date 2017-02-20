# Generic Website Workflow Setup

## Node/NPM Dependencies
* Verify node.js installation: node -v
* Create package.json file: npm init
* Install jquery: npm jquery install --save
* Install normalize.css: npm normalize.css --save
* Note: to re-install node modules if deleted: npm install

## Set up Gulp build tools
* Verify gulp global installation: gulp -v
* Install gulp locally: npm install gulp --save-dev
* Create gulpfile.js
* In gulpfile.js, require gulp package
* Install gulp-watch locally: npm install gulp-watch --save-dev
* Set up watch task to monitor and update html, css, and js files
