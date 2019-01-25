Liri node app: LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Objectives: LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. Make a new GitHub repository called liri-node-app and clone it to your computer. To retrieve the data that will power this app, you'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

Node-Spotify-API Axios

You'll use Axios to grab data from the OMDB API and the Bands In Town API

Moment DotEnv

Contributors: Adam Jacobs

History: Var's originally used, then changed to let/const. let can be updated and not re-declared.

Functionality:

concertThis: This function takes in the userInput--command and the userQuery--artist and returns the next concert time and date for that artist, location and city.

![ALT TEXT]: (images\Capture1.JPG)

spotifyThisSong: This function takes in the userInput and the userQuery and returns the artist, track name, preview link and album title.

![ALT TEXT}: (images\Capture2.JPG)
![ALT TEXT]: (images\Capture6.JPG)

movieThis: This function takes the userInput and the userQuery and returns title, case, release date, ratings, country of origin and synopsis.

![ALT TEXT]: (images\Capture3.JPG)
![ALT TEXT]: (images\capture5.JPG)

doThis: This function randomily selects one of the functions and searches for it.

![ALT TEXT]: (images\Capture4.JPG)

Credits: Hat tip to Sarah Chima for her article: https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

License: This project is licensed under the MIT License.
