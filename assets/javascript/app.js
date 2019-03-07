$(document).ready(function () {


    var subjects = [];
    var newGame = '';

    var findGifs = function () {
        console.log("Hello World!");
    };

    $("#gif-search-go").on("click", function () {
        findGifs();
        addButton();
    });

    var addButton = function () {
        newGame = $("#gif-search-bar").val().trim();
        subjects.push(newGame);
        console.log(subjects);
    };

});
//program needs to accept input, read input, reach out to GIPHY database, and use the API search to return relevant gifs