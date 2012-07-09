/************************************
 author : Garbray
 ************************************/

/************************************
 * Global variables
 ************************************/

var content = $('content'),
	about = $('about'),
	cont = "",
	findme = $('findme'),
	interesting = $('interesting'),
	li = $$('.view'),
	places = $('places'),
	proyects = $('proyects'),
	twitter = $('twitter');




/************************************
 * Event listener
 ************************************/

about.addEvent('click', showAbout);
findme.addEvent('click',showFindMe);
interesting.addEvent('click',showInteresting);
places.addEvent('click',showPlaces);
proyects.addEvent('click',showProyects);
twitter.addEvent('click',showTwitter);


/************************************
 * Functions
 ************************************/

function showAbout(){
	cont = "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	changeContent(this,cont);
}

function showFindMe(){
	cont = "<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>";
	changeContent(this,cont);
}

function showPlaces(){
	cont = "<p>Places</p>";
	changeContent(this,cont);
}

function showProyects(){
	cont = "<h2> fuck yeah </h2>";
	changeContent(this,cont);
}

function showInteresting(){
	cont = "<p> I love makes real my dreams this could be a really dangerous lol is only a test\
				<ul> <li> like </li>\
				</ul>\
				</p>";
	changeContent(this,cont);
}

function showTwitter(){
	cont = "<p> Twitter</p>";
	changeContent(this,cont);
}

function changeContent(ele,text){
	content.innerHTML = text;
	removeSelected();
	ele.addClass('selected');
}

function removeSelected(){
	for (var i = 0; i < li.length; i++) {
		li[i].removeClass('selected');
	};
}


/************************************
 * obtain tweets 
 ************************************/
x = new Request.JSONP({
  url: "http://search.twitter.com/search.json",
  data: {
    q: "garbray"
  },
  onComplete: function(tweets) {
    // Log the result to console for inspection
    console.log('tweets of user query:'+tweets);
    // left implementation of the function to display the tweets and set the style
  }
}).send();
