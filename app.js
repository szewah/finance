var arstechnicalURL = 'https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=02e4797226234e7594d8a27122b0f4bc'

$.ajax({
  type: 'GET'
  url: arstechnicalURL,
  success: function(res) {
    console.log('success', res)
  }
})

var bloombergURL = 'https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=02e4797226234e7594d8a27122b0f4bc'

$.ajax({
  url: bloombergURL,
  success: function(res) {
    console.log('success', res)
  }
})

$.ajax({
  url: 'reuters',
  success: function(res) {
    console.log(res)
  }
})

function handleNewsApiResponse(res) {
  var formattedResponse = res.map(function() {
    // format the response from the api
  })
  renderNewsArticles(formattedResponse)
}

function handleBloombergApiResponse() {

}


function renderNewsArticles(articles) {

}