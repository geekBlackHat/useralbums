# angular-1-quickstart
this helps you start an angular project quickly. Project include all needed minimal bower dependencies and gulp configured with live reload

#This quickstart is useful for
1. Small angular application which will not have more than 10 pages
2. Applications having single module
3. For learning purpose and carrying out some experiments while learning

DO NOT USE THIS FOR LARGE ANGULAR APPLICATION
FOR LARGE ANGULAR APPLICATIONS, PLEASE REFER TO https://github.com/geekBlackHat/angular-1.x-multiple-modules-app

#Requirements

Have npm and bower installed on your machine

#install bower dependencies
bower install

#install gulp dependencies
npm install

#run the project on live reload server
gulp run

#naming convention
Follow the naming convention so that gulp automatically adds all the stuff at right place

Controllers
Avoid: controllername.js
Follow: controllername.controller.js

Services
Avoid: servicename.js
Follow: servicename.service.js

name both the factories and services to end with servicename.service.js

Directives
Avoid: directivename.js
Follow: directivename.directive.js