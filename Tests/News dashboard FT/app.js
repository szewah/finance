const ft = "https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=4581ef80edad44a1b6178b25c59ce29b&pageSize=1"
const aje = "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
const bizInsider = "https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
const cnbc = "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
const arsTech = "https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize1"
const reuters = "https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
const economist ="https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
const cryptoCoin ="https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
// const everything ="https://newsapi.org/v2/everything?q=oldage&apiKey=02e4797226234e7594d8a27122b0f4bc&pageSize=1"
// const aarp = "https://newsapi.org/v2/everything?domains=aarp.org&apiKey=02e4797226234e7594d8a27122b0f4bc"


const newsApp = new Vue({
    el: "#newsHeadLinesApp",
    data: {
        results: []
    },
    methods: {
        getNews: function() {
            axios.all ([
                axios.get(ft),
                axios.get(aje),
                axios.get(bizInsider),
                axios.get(cnbc),
                axios.get(arsTech),
                axios.get(reuters),
                axios.get(economist),
                axios.get(cryptoCoin),
                // axios.get(everything),
                // axios.get(aarp),
                ])
                .then((resp) => {
                    resp.forEach(res =>{
                        this.results.push(res.data.articles[0])
                    })
                    // console.log(resp)
                    // this.results = resp.data.articles
                });
        },
    },
    created: function() {
        this.getNews()
    }
})



