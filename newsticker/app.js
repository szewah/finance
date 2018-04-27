
$.ajax({
	type: 'GET',
	url: 'https://newsapi.org/v2/top-headlines?' + 'sources=business-insider&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc' + '&pageSize=1', 
	success: handleBizInNewsResponse,
})

function handleBizInNewsResponse(res){
  var src = $('#article-template').html()
  var template = Handlebars.compile(src)
  //looking at each article and returning a new array that's going to contain the original material 
  //except it will have a source
  // res.articles = res.articles.map(function(article) {
  // article.source = "Business Insider"
  //   return article
  // })
  var articlesTemplate = template(res.articles)
  console.log(src)
  console.log(articlesTemplate)
  $(".inner-marquee").append(articlesTemplate) 
 }


$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=financial-times&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc' + '&pageSize=1',
  success: handleFtNewsResponse,
})

function handleFtNewsResponse(res) {
  var src = $('#article-template').html()
  var template = Handlebars.compile(src)
  var articlesTemplate  = template(res.articles) 
  console.log(src)
  console.log(articlesTemplate)
  $(".inner-marquee").append(articlesTemplate)

}


$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=bloomberg' + '&apiKey=02e4797226234e7594d8a27122b0f4bc' + '&pageSize=1',
  success: handleBBNewsResponse,
})

function handleBBNewsResponse(res) {
  var src = $('#article-template').html()
  var templateGenerator = Handlebars.compile(src)
  var articlesTemplate = templateGenerator(res.articles) 
  console.log(src)
  console.log(articlesTemplate)
  $(".inner-marquee").append(articlesTemplate)
}


