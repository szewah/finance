// Vue.config.productionTip = false
let coinMarket = 'https://api.coinmarketcap.com/v2/ticker/?limit=10'
let updateInterval = 60 * 1000;



let newApp = new Vue({
    el: '#coinApp',
    data: {
        // data within an array
        results: {}
    },

    methods: {

        getCoins: function() {
            axios
                .get(coinMarket)
                .then((resp) => {
                    // this.results = resp.data.data
                    this.results = formatCoins(resp);
                });
        },

        getColor: (num) => {
            return num > 0 ? "color:green;" : "color:red;";
        },
    },

    created: function() {
        this.getCoins();
    }
})


setInterval(() => {
        newApp.getCoins();
    },
    updateInterval
);


function formatCoins(res) {
    var coinDataArray = []
    Object.keys(res.data.data).forEach(function(key) {
        coinDataArray.push(res.data.data[key])
    })
    coinDataArray.sort(function(a,b) {
        return a.rank - b.rank
    })
    console.log(coinDataArray)
    return coinDataArray
}