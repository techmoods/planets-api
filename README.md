## About Planets API

Planets API is a web application that provides users with detailed information about each of the 
planets in the solar system. Users can choose from the eight planets to learn about, vote on their favorite, and write comments to a message board. 

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://www.npmjs.com/package/mongoose)

## Notes

For reference I will document the journey of implementing project features and requirements here.

## Getting Started

This app relies on two sets of data:

1. Planetary Data
2. User Comments

To setup a database to store user comments, I used a free MongoDB account. The planetary data will be available to the app via a json object in the api/data directory.

To seed the database with user comments I used this SQL --> [SQL](www.mylink.com)
