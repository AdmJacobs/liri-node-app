//using .env to hide keys
require("dotenv").config();

let request = require("request");

const moment = require('moment');

const fs = require("fs");

const keys = require("./keys.js");

const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);

let userInput = process.argv[2];
let userQuery = process.argv.slice[3].join(" ");

//App Logic
//Use switch&case instead of if/else statement
function userCommand(userInput, userQuery) {
  switch (userInput) {
    case "concert-this":
      concertThis();
      break;
    case "spotify-this":
      spotifyThisSong();
      break;
    case "movie-this":
      movieThis();
      break;
    case "do-this":
      doThis(userQuery);
      break;
    default:
      console.log("What's going on here?");
      break;

  }
}
userCommand(userInput, userQuery);

function concertThis() {
  console.log('\n - - - - -\n\nSearching For...$(userQuery) next show..');
  request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp" + bandsintown, response, body) {
      if(!error && response.statusCode === 200) {
    let userBand = JSON.parse(body);
    if (userBand.length > 0) {
      for (i = 0; i < 1; i++) {
        console.log('\n Hey: Here you go..\n\nArtist: ${userBand[i].lineup[0]} \nVenue: ${userBand[i].venue.name}\nVenue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}\nVenue City: ${userBand[i].venue.city}, ${userBand[i].venue.country}')

        let concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY hh:00 A");
        console.log('Date and Time: ${concertDate}\n\n-----');
      };
    } else {
      console.log('Band or concert not found!');
    };
  }
};
function spotifyThisSong() {
  console.log('\n - - - - - \n\nSearching For.."${userQuery}"');
  if (!userQuery) { userQuery = "the sign ace of base" };

  spotify.search({ type: 'track', query: userQuery, limit: 1 }, function (error, data) {
    if (error) {
      return console.log('Error occured:' + error);
    }
    let spotifyArr = data.tracks.items;

    for (i = 0; i < spotifyArr.lenth; i++) {
      console.log('\nHey! Here you go..\n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}\nAlbum: ${data.tracks.items[i].album.name}\n\n - - - - -')
    };
  });
}

function movieThis() {
  console.log('\n - - - - -\n\nSearching For..."${userQuery}"');
  if (!userQuery) { userQuery = "mr nobody"; };

  request("http://www.omdbapi.com/?i=" + userQuery + "tt3896198&apikey=71b6fbc1=", function (error, result)
  let userMovie = JSON.parse(body);

  let ratingsARR - userMovie.Ratings;
  if (ratingsARR.lenght > 2) {
  }
  if (!error && response.statusCode === 200) {
    console.log('\n Hey! Here you go..\n\nTitle: ${userMovie.Title}\nCast: ${userMovie.Actors}\nReleased: ${userMovie.Year}\nIMDB Rating: ${userMovie.imdbRating}\nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\nPlot: ${userMovie.Plot}\n\n- - - - - ')
  } else {
    return console.log("Movie able to be found. Error:" + error)
  };
});

function doThis() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) { return console.log(error); }

    let dataArr = data.split(",");

    userInput = dataArr[0];
    userQuery = dataArr[1];

    userCommand(userInput, userQuery);
  });
};

