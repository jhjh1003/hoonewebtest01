/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

//var IBMIoTF = require('ibmiotf');

//var fs = require('fs');

/*var appClientConfig = {
  "org": "u87pgz",
  "id": "myapp",
  "domain":"internetofthings.ibmcloud.com",
  "auth-key": "a-u87pgz-fbzjebi2w5",
  "auth-token": "2qPDPD?c6Mhi21RiCB" 
};
*/

// create a new express server
var app = express();
app.use(express.static(__dirname + '/public'));
// serve the files out of ./public as our main files
/*app.get("/public", function(request,response){
	fs.readFile('list.html',function(error,data){
			appClient.getAllDeviceTypes().then(function onSuccess (response){
				response.send(ejs.render(data, {
						data: results}
				));
			});


	});
});
*/
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

