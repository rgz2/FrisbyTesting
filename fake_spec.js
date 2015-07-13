var frisby = require('frisby');

	
	var API_KEY = '';
	var URL = '';

	var AUTH = "Basic " + new Buffer(API_KEY + ":").toString("base64");


	frisby.globalSetup({ // globalSetup is for ALL requests
	  request: {
	    // Set authorization header
	    headers: { 'Authorization': AUTH }
	  }
	});

	frisby.create('testQuote')
	.post(URL+'quote', {
	   		

	   		
	})
	.inspectJSON()
	.inspectBody()
	.expectStatus(200)
	.toss();

