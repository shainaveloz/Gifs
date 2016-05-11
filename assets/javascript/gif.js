
var cartoons = ['Spongebob Squarepants', 'Adventure Time','Futurama', 'South Park', 'Cow and Chicken', 'Peter Pan'];

function displayCartoonInfo(){

$('button').on('click', function() {
	$('#cartoonButton').removeClass('active');
    $(this).addClass('active');
    var cartoons = $(this).data('cartoons');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ cartoons +"&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({url: queryURL, method: 'GET'})
		.done(function(response) {
			var imageUrl = response.data.image_original_url;
			var cartoonImage = $("<img>");
			cartoonImage.attr('src', imageUrl);
            cartoonImage.attr('alt', 'cartoons image');
              $('#cartoonsView').prepend(cartoonImage);
                  // $.ajax({url: queryURL, method: 'GET'})
     
         var results = response.data;
         for(var i=0; i < results.length; i++){
            if (results[i].rating == "r" || results[i].rating == "pg-13")
            {
            }
            else {
              var gifDiv = $('<div class="item">')
             var rating = results[i].rating;
             var p = $('<p>').text( "Rating: " + rating);
             var cartoonImage = $('<img>');
             cartoonImage.attr('src', results[i].images.fixed_height.url);
             gifDiv.append(p)
             gifDiv.append(cartoonImage)
             $('#cartoonsView').prepend(gifDiv);                        
            }
        }
    })
});

};

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
	$('#buttonsView').empty();
	for (var i = 0; i < cartoons.length; i++){
		var a = $('<button>')
		 a.addClass('cartoons');
		 a.attr('data-name', cartoons[i]);
		 a.text(cartoons[i]); 
		 $('#buttonsView').append(a);
		 }
	};
	

$('#addCartoon').on('click', function(){
	var cartoon = $('#cartoon-input').val().trim();
	cartoons.push(cartoon);
	renderButtons();
		return false;
	});

$(document).on('click', '.cartoon', displayCartoonInfo);
	renderButtons();

// 