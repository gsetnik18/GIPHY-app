$(document).ready(function () {


    var games = ["D&D" , ""];
    var newGame = '';

    var x = $(this).data("search");
    console.log(x);
    
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + x + 'api_key=m0lBamz8PXqygikoABJKEF4YjRhGMJ2W&limit=10&offset=0&rating=G&lang=en';
    console.log(queryURL);

    //function to search for gifs - not done yet
    var findGifs = function () {
        console.log("Hello World!");
    };

    $("#gif-search-go").on("click", function () {
        findGifs();
        addButton();
    });

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
          var a = $('<button class="btn btn-primary">');
          a.attr("id", "game");
          a.attr("data-search", games[i]);
          a.text(games[i]);
          $("#custom-buttons").append(a);
        }

};
});
//program needs to accept input, read input, reach out to GIPHY database, and use the API search to return relevant gifs