// // 1. grab template from HTML
// var src = $('#article-template').html()
// // 2. compile HTML-based template into Handlebars template
// var template = Handlebars.compile(src)

// var personTemplate  = template({
//   author: 'chandler',
//   title: 'intro to js',
// })

// console.log(src)
// console.log(personTemplate)



 $.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=financial-times&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleFtNewsResponse,
  // function handleFtNewsResponse(res) {
    // res.articles.forEach(function(article) {
      // $("#ft").append('div')
        // .append('h4').text()
        // .append('h6').addClass('')
    // })
})

function handleFtNewsResponse(res) {
  // 1. grab template from HTML
  var src = $('#article-template').html()
  // 2. compile HTML-based template into Handlebars template
  var template = Handlebars.compile(src)

  var articlesTemplate  = template(res.articles) 

  console.log(src)
  console.log(articlesTemplate)
  $("#ft").append(articlesTemplate)

}

$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=crypto-coins-news&' + 'apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleCryptoNewsResponse,
})

function handleCryptoNewsResponse(res){
  var src = $('#article-template').html()
  var template = Handlebars.compile(src)	
  var articlesTemplate = template(res.articles)
  console.log(src)
  console.log(articlesTemplate)
  $("#cryptonews").append(articlesTemplate) 
 }


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
	$('#bizinsider').append(articlesTemplate)
}

$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=bloomberg' + '&apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleBBNewsResponse,
})

function handleBBNewsResponse(res) {
  // 1. grab template from HTML - this is just a string!
  var src = $('#article-template').html()

  // 2. compiles string representation of template into Handlebars template
  var templateGenerator = Handlebars.compile(src)

  // 3. templateGenerator eats an object/array and returns a string of HTML
  var articlesTemplate = templateGenerator(res.articles) 

  console.log(src)
  console.log(articlesTemplate)
  // 4. Append the articlesHTML into the DOM
  $("#bloomberg").append(articlesTemplate)
}


$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?' + 'sources=ars-technica' + '&apiKey=02e4797226234e7594d8a27122b0f4bc',
  success: handleArsTechNewsResponse,
})


function handleArsTechNewsResponse(res) {
	var src = $('#article-template').html()
	var templateGenerator = Handlebars.compile(src)
	var articlesTemplate = templateGenerator(res.articles)
	$("#arstechnica").append(articlesTemplate)  
}