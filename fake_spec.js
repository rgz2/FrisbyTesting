var frisby = require('frisby');

	
	var API_KEY = 'a7289157e99fe71f5f98599a740f260abce869826665b774463d7418701e650c';
	var URL = 'https://api.intelipost.com.br/api/v1/';

	var AUTH = "Basic " + new Buffer(API_KEY + ":").toString("base64");


	frisby.globalSetup({ // globalSetup is for ALL requests
	  request: {
	    // Set authorization header
	    headers: { 'Authorization': AUTH }
	  }
	});

	frisby.create('testQuote')
	.post(URL+'quote', {
	   		"origin_zip_code": "01001-000",
			"destination_zip_code": "06396-200",
			"products": [
			{
				"weight": 2,
				"cost_of_goods": 50,
				"width": 10,
				"height": 10,
				"length": 10,
				"quantity": 10,
				"sku_id": "12345",
				"description": "camiseta",
				"can_group": "true"
			},
			{
				"weight": 2,
				"cost_of_goods": 50,
				"width": 10,
				"height": 10,
				"length": 10,
				"quantity": 10,
				"sku_id": "12345",
				"description": "calça",
				"can_group": "true"
			}
			],
				"additional_information": {
				"free_shipping": false,
				"extra_cost_absolute": 0,
				"sales_channel": "hotsite",
				"client_type": "gold",
				"lead_time_business_days": 0,
				"delivery_method_ids": [
						26,
						25,
						8
					] 
				}
	})
	.inspectJSON()
	.inspectBody()
	.expectStatus(200)
	.toss();

