var request = require("request");
var cheerio = require("cheerio");

var url = "https://in.bookmyshow.com/movies/avengers-endgame/ET00090482";
var url2 = "https://in.bookmyshow.com/pondicherry/movies/kanchana-3/ET00094181";
var url3 = "https://paytm.com/movies/puducherry";
var url4 = "https://in.bookmyshow.com/pondicherry/movies/kanchana-3/ET00094181";
var url5 = "https://paytm.com/movies/puducherry/avengers-endgame-m/o9ovj2?fromdate=2019-04-26";

function bookmyshow() {
    request(url,

        (err, response, html) => {
            if (!err) {


                var asTicket = html.includes("showtimes btn _cuatro");

                if (asTicket == true) {

                    sendSMS();
                }

                //console.log(asTicket);
            }

        });
}


function paytmBooking() {
    request(url3,

        (err, response, html) => {
            if (!err) {


                var asTicket = html.includes("showtimes btn _cuatro");

                let $ = cheerio.load(html);

                var dummyTest = "kanchana 3Tamilnatpe thunaiTamiljerseyTelugukalankHindithe curse of the weeping womanEnglishwatchmanTamilathiranMalayalammehandi circusTamilavengers: end game"
                let content = $('#popular-movies');
                //let content2 = $('._3Sve');

                if (content.text().includes("avengers: end game")) {

                    //sendSMS('+916383125509');
                    sendSMS('+916385635921');
                    //sendSMS('+919597232468');
                } else {

                    console.log('false');
                }


            }

        });
}

function paytmLookforTheater() {
    request(url5,

        (err, response, html) => {
            if (!err) {

                let $ = cheerio.load(html);

                
                let content = $('.SbzU');
                //let content2 = $('._3Sve');
                //console.log(content.text());

                 if (content.text().includes("Raja Talkies")) {

                     //sendSMS('+916383125509');
                     sendSMS('+916385635921');
                     //sendSMS('+919597232468');
                 } else {

                     console.log('false');
                 }


            }

        });
}

function sendSMS() {


    const accountSid = 'AC95f53f7a2cdd23ace709319d7ed9d367';
    const authToken = 'bf3944220ae1ed79d0c6e74067ea1207';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'test',
            from: '+14406074080',
            to: '+916385635921'
        })
    //.then(message => console.log(message.sid));
}

var minutes = 1;
var the_interval = minutes * 60 * 1000;

 setInterval(function () {
     //console.log("I am doing my 5 minutes check");
     // do your stuff here
     paytmLookforTheater();
 }, the_interval);

//paytmLookforTheater();