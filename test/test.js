var assert = require('assert');
var configger = require('../configger');
var config = configger.load({http:{port:8080}});
var http = require('http');


it('doesn\'t do anything.',
	 function() {});

it('"owserver.urls" should be configured as an array',
	 function() { assert.ok(configger.get('owserver').urls instanceof Array); });

it('"owserver.urls" should be configured as an array',
	 function() { assert.ok(config.owserver.urls instanceof Array); });

http.get(config.owserver.urls[0],
	function (response)
	{
		console.log('In resp');
		it('response should be 200',
			function()
			{
				console.log('In it');
				assert.ok(false);
				//assert.ok(url+': '+response.statusCode);
			  //assert.equal(response.statusCode,201);
			}
		);
	}
);
