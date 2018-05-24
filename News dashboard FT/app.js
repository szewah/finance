let ft = "https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=02e4797226234e7594d8a27122b0f4bc"

let newsApp = new Vue({
    el: "#newsHeadLinesApp",
    data: {
        results: {}
    },
    methods: {
        getFTNews: function() {
            axios
                .get(ft)
                .then((resp) => {
                    this.results = resp.data.articles
                });
        },
    },
    created: function() {
        this.getFTNews()
    }
})



