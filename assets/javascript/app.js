
var games = [];
//function to add physical buttons to HTML once they have been created in search bar
function displayButtons() {
    $("#custom-buttons").empty();
    for (var i = 0; i < games.length; i++) {
        var gameButton = $("<button class='game'>");
        //gameButton.attr(“id”, “game”);
        gameButton.attr("data-search", games[i]);
        gameButton.text(games[i]);
        $("#custom-buttons").append(gameButton);
    };
};

function displayGifs(data) {
    for (var i = 0; i < data.length; i++) {
        //function to display gifs from a button click
        if (data[i].rating !== "r" && data[i].rating !== "pg-13") {
            var gifDiv = $("<div>");
            gifDiv.addClass("game-gifs");
            var gameImage = $("<img>");
            gameImage.attr("src", data[i].images.fixed_width_still.url);
            gameImage.attr("data-still", data[i].images.fixed_width_still.url);
            gameImage.attr("data-animate", data[i].images.fixed_width.url);
            gameImage.attr("data-state", "still");
            gameImage.addClass("gif");
            gifDiv.append(gameImage);
            $("#gifs-go-here").append(gifDiv);
        };
    };
}

var getGifs = function (text) {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + text + '&api_key=m0lBamz8PXqygikoABJKEF4YjRhGMJ2W&limit=10&offset=0&lang=en';
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        displayGifs(results)
    });
};

$("#gif-search-go").on("click", function (event) {
    event.preventDefault();
    var game = $("#gif-search-bar").val().trim();
    if (game === "") {
        return;
    };
    games.push(game);
    console.log(games);
    displayButtons();
    $("#gif-search-bar").val("");
});
//function to search for gifs - not done yet
$("#custom-buttons").on("click", ".game", function () {
    console.log('!!');
    console.log($(this).text());
    getGifs($(this).text());
});

$("#gifs-go-here").on("click", ".gif", function () {
    console.log("this gif works!")
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };
    ;
});
