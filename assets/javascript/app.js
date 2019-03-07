$(document).ready(function () {


    var games = ["Skyrim" , "Devil May Cry" , "Halo" , "Red Dead Redemption"];
    var newGame = '';

    var game = $(this).data("search");
    console.log(game);
    
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=m0lBamz8PXqygikoABJKEF4YjRhGMJ2W&q=' + game + '&limit=10&offset=0&rating=PG&lang=en';
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
        })

        .then(function(response) {
            console.log(response);
            var results = response.data;

            for (var i = 0; i<results.length; i++) {

                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div>");
                    gifDiv.addClass("game-gifs");
                };
            };
        });

    //function to search for gifs - not done yet
    var findGifs = function () {
        console.log("Hello World!");
    };

    $("#gif-search-go").on("click", function () {
        findGifs();
        addButton();
    })

    //function to create buttons from whatever is entered into search bar
    var addButton = function () {
        newGame = $("#gif-search-bar").val().trim();
        games.push(newGame);
        console.log(games);
        displayButtons();
    };

    //function to add physical buttons to HTML once they have been created in search bar
    function displayButtons() {
        $("#custom-buttons").empty();
        for (var i = 0; i < games.length; i++) {
          var gameButton = $('<button class="btn btn-primary">');
          gameButton.attr("id", "game");
          gameButton.attr("data-search", games[i]);
          gameButton.text(games[i]);
          $("#custom-buttons").append(gameButton);
        };



};
});
//program needs to accept input, read input, reach out to GIPHY database, and use the API search to return relevant gifs