var request = require("request");

var url = "https://in.bookmyshow.com/movies/avengers-endgame/ET00090482";
var url2 = "https://in.bookmyshow.com/pondicherry/movies/kanchana-3/ET00094181";

function requests(){
request(url,
    
    (err, response, html) => {
    if(!err) {

        
        var asTicket = html.includes("showtimes btn _cuatro");

        if (asTicket == true) {
            
            sendSMS();
        }
        
        //console.log(asTicket);
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

var minutes = 5;
var the_interval = minutes * 60 * 1000;

setInterval(function() {
  //console.log("I am doing my 5 minutes check");
  // do your stuff here
    requests();
}, the_interval);

//request();