/*https://developer.okta.com/blog/2017/09/06/build-a-cryptocurrency-comparison-site-with-vuejs*/
let cryptoCompare_API = "https://min-api.cryptocompare.com";
let cryptoCompare_URI = "https://www.cryptocompare.com";
let coinMarketCap_API = "https://api.coinmarketcap.com";
							
let updateInterval = 60 * 1000;

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
		let self = this;
		axios
			.get(cryptoCompare_API + "/data/all/coinlist")
			.then((resp) => {
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
		let self = this;
		axios
			.get(coinMarketCap_API + "/v2/ticker/?limit=10")
			.then((resp) => {
				this.coins = resp.data;
			})
			.catch((err) => {
				console.error(err);
			});
		},

	getCoinImage: function(symbol) {
		symbol = (symbol === "MIOTA" ? "IOT": symbol);
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


