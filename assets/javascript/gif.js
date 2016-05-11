
var cartoons = ['Spongebob Squarepants', 'Adventure Time','Futurama', 'South Park', 'Cow and Chicken', 'Peter Pan', 'Looney Tunes', 'King of the Hill', 'The Little Mermaid', 'The Flintstones', 'Winnie the Pooh'];

$('button').on('click', function() {
	$('#cartoonButton').removeClass('active');
    $(this).addClass('active');
    var cartoons = $(this).data('cartoons');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ cartoons +"&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {
			var imageUrl = response.data.image_original_url;
			var cartoonsImage = $("<img>");
			cartoonsImage.attr('src', imageUrl);
            cartoonsImage.attr('alt', 'cartoons image');
              $('#cartoonsView').prepend(cartoonsImage);
                  $.ajax({url: queryURL, method: 'GET'})
     
         var results = response.data;
         for(var i=0; i < results.length; i++){
            if (results[i].rating == "r" || results[i].rating == "pg-13")
            {
            }
            else {
              var gifDiv = $('<div class="item">')
             var rating = results[i].rating;
             var p = $('<p>').text( "Rating: " + rating);
             var cartoonsImage = $('<img>');
             cartoonsImage.attr('src', results[i].images.fixed_height.url);
             gifDiv.append(p)
             gifDiv.append(cartoonsImage)
             $('#cartoonsView').prepend(gifDiv);               
            }
         
        
};
        });
});

 $('.cartoonsImage').on('click', function(){

 	var state = $(this).attr('data-state'); 
 	if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
        });

function renderButtons(){ 
	$('#cartoonsView').empty();
	for (var i = 0; i < cartoons.length; i++){
		var a = $('<button>')
		 a.addClass('cartoons');
		 a.attr('data-name', cartoons[i]);
		 a.text(cartoons[i]); 
		 $('#CartoonsView').append(a);
		 }
	}
	}

$('#addCartoon').on('click', function(){
	var cartoons = $('#cartoon-input').val().trim();
	cartoons.push(movie);
	renderButtons();
		return false;
	})
