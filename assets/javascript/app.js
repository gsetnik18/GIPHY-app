$(document).ready(function () {

    var games = [];
    //function to add physical buttons to HTML once they have been created in search bar
    function displayButtons() {
        $("#custom-buttons").empty();
        for (var i = 0; i < games.length; i++) {
            var gameButton = $("<button class=“game”>");
            $(".game").bind("click", function(e){
                e.preventDefault();
            console.log("!!")
            console.log(e);
            });
            //gameButton.attr(“id”, “game”);
            gameButton.attr("data-search", games[i]);
            gameButton.text(games[i]);
            $("#custom-buttons").append(gameButton);
        };
    };


        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=m0lBamz8PXqygikoABJKEF4YjRhGMJ2W&q=' + "" + '&limit=10&offset=0&rating=PG&lang=en';
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    //function to display gifs from a button click
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        var gifDiv = $("<div>");
                        gifDiv.addClass("game-gifs");
                        var gameImage = $("<img>");
                        gameImage.attr("src", results[i].images.fixed_width_still.url);
                        gameImage.attr("data-still", results[i].images.fixed_width_still.url);
                        gameImage.attr("data-animate", results[i].images.fixed_width.url);
                        gameImage.attr("data-state", "still");
                        gameImage.addClass("gif");
                        gifDiv.append(gameImage);
                        $("#gifs-go-here").append(gifDiv);
                        games.push(game);
                        addButton();
                    };
                };
            });

        $("#gif-search-go").on("click", function (event) {
            event.preventDefault();
            var game = $("#gif-search-bar").val().trim();
            if (game === "") {
                return;
            };
        });
        //function to search for gifs - not done yet
        $(".game").on("click", function(e) {
            e.preventDefault();
            console.log('!!')
            console.log(e);
        });

        $("#gif-search-go").on("click", function (e) {
            console.log(e);
            //findGifs();
            addButton();
        })

        //function to create buttons from whatever is entered into search bar
        var addButton = function () {
            newGame = $("#gif-search-bar").val().trim();
            games.push(newGame);
            console.log(games);
            displayButtons();
        };

    });


//program needs to accept input, read input, reach out to GIPHY database, and use the API search to return relevant gifs