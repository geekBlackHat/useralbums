
Project include all needed minimal bower dependencies and gulp configured with live reload

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