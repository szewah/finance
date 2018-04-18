
var apiKey = '02e4797226234e7594d8a27122b0f4bc'


var ftURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=financial-times&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc';


$.ajax({
	type: 'GET',
	url: ftURL,
	success: handleFtNewsResponse,
});


var cryptoNewsURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=crypto-coins-news&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc'

$.ajax({
  type: 'GET',
  url: cryptoNewsURL,
  success: handleCryptoNewsResponse,
})


var bizInURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=business-insider&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc'

$.ajax({
  type: 'GET',
  url: bizInURL,
  success: handleBizInNewsResponse,
})


var bloombergURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=bloomberg' + '&apiKey=02e4797226234e7594d8a27122b0f4bc'

$.ajax({
  type: 'GET',
  url: bloombergURL,
  success: handleBBNewsResponse,
})



var arsTechURL = 'https://newsapi.org/v2/top-headlines?' + 'sources=ars-technica' + '&apiKey=02e4797226234e7594d8a27122b0f4bc'

$.ajax({
  type: 'GET',
  url: arsTechURL,
  success: handleBBNewsResponse,
})


function handleFtNewsResponse(res) {
  $("#ft").html(res.articles)
}

function handleCryptoNewsResponse(res){
  $("#cryptonews").html(res.articles)	
}

function handleBizInNewsResponse(res){
  $("#cryptonews").html(res.articles)	
}

function handleBBNewsResponse(res){
  $("#bloomberg").html(res.articles)	
}

function handleArsTechNewsResponse(res){
  $("#arstechnica").html(res.articles)	
}



// function handleNewsApiResponse(res) {
//   var formattedResponse = res.map(function() {
//     // format the response from the api
//   })
//   renderNewsArticles(formattedResponse)
// }

// function handleBloombergApiResponse() {
//     var formattedResponse = res.map(function() {
//     // format the response from the api
//   })
//   renderNewsArticles(formattedResponse)

// }


// function renderNewsArticles(articles) {

// }