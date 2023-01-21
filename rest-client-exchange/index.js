const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://currency-exchange.p.rapidapi.com/listquotes',
  headers: {
    'X-RapidAPI-Key': '8e8f987914mshbcfcd90080fc6e4p1d6f54jsn770c179cb34f',
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 
