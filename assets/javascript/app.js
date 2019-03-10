
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
        var game = $(this).attr("data-search");

        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + "" + '&api_key=m0lBamz8PXqygikoABJKEF4YjRhGMJ2W&limit=10&offset=0&lang=en';
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
            games.push(game);
            console.log(games);
            displayButtons();
        });
        //function to search for gifs - not done yet
        $(".game").on("click", function(e) {
            e.preventDefault();
            console.log('!!')
            console.log(e);
        });
    
//program needs to accept input, read input, reach out to GIPHY database, and use the API search to return relevant gifs