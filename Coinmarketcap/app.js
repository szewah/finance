let coinMarket = 'https://api.coinmarketcap.com'
let updateInterval = 60 * 1000;

let newApp = new Vue ({
	el: '#coinApp',
	data: {
		// data within objects
		results: {}
	},

	methods: { 

		getCoinData: function () {
		axios
			.get(coinMarket +'/v2/ticker/?limit=10')
  			.then((resp) => {
				this.results = resp.data
    			// console.log(resp.data); 
    			// console.log(resp.status); 
  				}); 
		},

		getColor: (num) => {
      		return num > 0 ? "color:green;" : "color:red;";
    	},
    
    },

    created: function () {
    	this.getCoinData();
  	}
})

setInterval(() => {
  	app.getCoins();
}, 
  	updateInterval
);


