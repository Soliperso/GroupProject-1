// jQuery for carousel
$(document).ready(function() {
    $('.carousel').carousel();
});



// // MusixMatch
// // Endpoint: [https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/](https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/)  (need to add exact endpoint for lyrics search)
// // API Key: 1c9baf23b0d366711ac0096634f7b3e6
// // Documentation: [https://developer.musixmatch.com/documentation](https://developer.musixmatch.com/documentation)
// // Search for a string among lyrics: q_lyrics


// var userInput = "";

// var musixMatchAPI_KEY = "1c9baf23b0d366711ac0096634f7b3e6";

// $.ajax({
//     url: "https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/?q=" + userInput + "?apikey=" + musixMatchAPI_KEY,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// });

// // YouTube
// // Endpoint: [https://www.youtube.com/iframe_api](https://www.youtube.com/iframe_api)
// // API Key: AIzaSyARIAx0ZVpwc63Bv3dptmWymN5DmCMOYG0
// // Documentation: [https://developers.google.com/youtube/v3/docs/](https://developers.google.com/youtube/v3/docs/)

// // var youTubeAPI_KEY = "AIzaSyARIAx0ZVpwc63Bv3dptmWymN5DmCMOYG0";

// // $.ajax({
// //     type: "GET",
// //     url: "https://www.youtube.com/iframe_api"
// // });

// // NFLArrest
// // Endpoint: [http://nflarrest.com/api/v1/](http://nflarrest.com/api/v1/)
// // API Key: a81d696ff0msh9be012b0b7f7f37p1ddc64jsn4a73ad761f23 (from Rapid-API)
// // Documentation: [http://nflarrest.com/api/](http://nflarrest.com/api/)

// var nflArrestAPI_KEY = "a81d696ff0msh9be012b0b7f7f37p1ddc64jsn4a73ad761f23";

// $.ajax({
//     type: "GET",
//     url: "http://nflarrest.com/api/v1/..." // Elipses to signify incomplete link. Not sure which exact endpoint to use.
// });