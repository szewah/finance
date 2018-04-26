
$.ajax({
	type: 'GET',
	url: 'https://newsapi.org/v2/top-headlines?' + 'sources=business-insider&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc', 
	success: handleBizInNewsResponse,
})

function handleBizInNewsResponse(res){
  var src = $('#article-template').html()
  var template = Handlebars.compile(src)	
  var articlesTemplate = template(res.articles)
  console.log(src)
  console.log(articlesTemplate)
  $("#newsItem1").append(articlesTemplate) 
 }


$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=financial-times&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleFtNewsResponse,
})

function handleFtNewsResponse(res) {
  var src = $('#article-template').html()
  var template = Handlebars.compile(src)
  var articlesTemplate  = template(res.articles) 
  console.log(src)
  console.log(articlesTemplate)
  $("#newsItem2").append(articlesTemplate)

}


$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=bloomberg' + '&apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleBBNewsResponse,
})

function handleBBNewsResponse(res) {
  var src = $('#article-template').html()
  var templateGenerator = Handlebars.compile(src)
  var articlesTemplate = templateGenerator(res.articles) 
  console.log(src)
  console.log(articlesTemplate)
  $("#newsItem3").append(articlesTemplate)
}


