
var request = require('request');
request('https://reqres.in/api/users/3', 
	function (error, response, body) {
    	if (!error && response.statusCode == 200) {
        	alert(body);
     }
});
