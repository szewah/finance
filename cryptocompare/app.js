
// The API we're using for grabbing metadata about each cryptocurrency
// (including logo images).
let cryptoCompare_API = "https://min-api.cryptocompare.com";
let cryptoCompare_URI = "https://www.cryptocompare.com";
//API for cryptocurrency prices from coinmarketcap
let coinMarketCap_API = "https://api.coinmarketcap.com";
							
//the milliseconds after which currencies are updated
let updateInterval = 60 * 1000;

let app = new Vue ({
	el: "#app",
	data: {
		coins: [],
		coinData: {}
	},
	methods: {

/*
Load up all cryptocurrency data.This data is used to find what logos each currency has, 
so we can display things in a friendly way.
*/	
	getCoinData: function() {
		let self = this;
		axios.get(cryptoCompare_API + "/data/all/coinlist")
			.then((resp) => {
				this.coinData = resp.data.Data;
				this.getCoins();
			})
			.catch((err) => {
				this.getCoins();
				console.error(err);
			});
		},

/*
Get the top 10 cryptocurrencies by value. This data is refreshed each 5 minutes by the backing API 
service.
*/		
	getCoins: function() {
		let self = this;
		axios.get(coinMarketCap_API + "/v1/ticker/?limit=10")

			.then((resp) => {
				this.coins = resp.data;
			})
			.catch((err) => {
				console.error(err);
			});
		},

/*
Given a cryptocurrency ticker symbol, return the currency's logo
*/

	getCoinImage: function(symbol) {
		symbol = (symbol === "MIOTA" ? "IOT": symbol);
		symbol = (symbol === "VERI" ? "VRM" : symbol);

		return cryptoCompare_URI + this.coinData[symbol].ImageUrl;
	},

/*
Return a CSS color (either red or green) depending on whether or
not the value passed in is negative or positive.
*/

	getColor: (num) => {
      	return num > 0 ? "color:green;" : "color:red;";
    },
  },

/*
Using this lifecycle hook, we'll populate all of the cryptocurrency data as soon as the page is 
loaded a single time.*/
  	created: function () {
    this.getCoinData();
  }
});

/**
 * Once the page has been loaded and all of our app stuff is working, we'll
 * start polling for new cryptocurrency data every minute.
 *
 * This is sufficiently dynamic because the API's we're relying on are updating
 * their prices every 5 minutes, so checking every minute is sufficient.
 */
setInterval(() => {
  	app.getCoins();
}, 
  	updateInterval
);


