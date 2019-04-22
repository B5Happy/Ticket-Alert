var request = require("request");
var cheerio = require("cheerio");

var url = "https://in.bookmyshow.com/movies/avengers-endgame/ET00090482";
var url2 = "https://in.bookmyshow.com/pondicherry/movies/kanchana-3/ET00094181";
request(url,
    
    (err, response, html) => {
    if(!err) {

        //var $ = cheerio.load(html);
        var asTicket = html.includes("showtimes btn _cuatro");


        console.log(asTicket);
    }

});