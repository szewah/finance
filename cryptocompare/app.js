/*https://developer.okta.com/blog/2017/09/06/build-a-cryptocurrency-comparison-site-with-vuejs*/
let cryptoCompare_API = "https://min-api.cryptocompare.com";
let cryptoCompare_URI = "https://www.cryptocompare.com";
let coinMarketCap_API = "https://api.coinmarketcap.com";
							
let updateInterval = 60 * 1000;
// new Vue is a constructor
let app = new Vue ({ 
	el: "#app",
	data: {
		// array of currencies
		coins: [],
		// data within objects
		coinData: {}
	},

	methods: {

	getCoinData: function() {
		axios 
			.get(cryptoCompare_API + "/data/all/coinlist") // new-ish technique to deal with asynchronous requests

			.then((resp) => {
// in this instance call #app (new Vue constructor) find the coin data and set it equal to resp.data.Data
			// this.data.coinData
				this.coinData = resp.data.Data; 
// need to call the getCoins method many times to keep the data up-to-date, 
// and we should only call it once the metadata about all coins has already been loaded.
				this.getCoins();
			})
			.catch((err) => {
				this.getCoins();
				console.error(err);
			});
		},

	getCoins: function() {
		axios
			.get(coinMarketCap_API + "/v1/ticker/?limit=10")
			.then((resp) => {
				this.coins = resp.data;
			})
			.catch((err) => {
				console.error(err);
			});
		},

	getCoinImage: function(symbol) {
		//using debugger statement you can put in console.log(this) to see what data there is
		symbol = (symbol === "MIOTA" ? "IOT": symbol); //ternary statement = if else
		symbol = (symbol === "VERI" ? "VRM" : symbol);
// This code takes care of the cross-referencing between both API services, and allows us to easily retrieve a cryptocurrency’s image.
		return cryptoCompare_URI + this.coinData[symbol].ImageUrl;
    },

	getColor: (num) => {
      	return num > 0 ? "color:green;" : "color:red;";
    },
  },

  	created: function () {
    this.getCoinData();
  }
});

setInterval(() => {
  	app.getCoins();
}, 
  	updateInterval
);


