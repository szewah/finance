
$.ajax({
    type: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?' + 'sources=financial-times&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc',
    success: handleFTNews,
})

function handleFTNews(res) {
    var source = $('#some_template').html()
    var template = Handlebars.compile(source)
    var someTemplate = template(res.articles)
    $("#newsHeadLinesApp").append(someTemplate)
}

$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=crypto-coins-news&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleCryptoNewsResponse,
})

function handleCryptoNewsResponse(res){
  var src = $('#some_template').html()
  var template = Handlebars.compile(src)    
  var someTemplate = template(res.articles)
  $("#newsHeadLinesApp").append(someTemplate) 
 }