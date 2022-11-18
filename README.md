## About Planets API

Planets API is a web project for a coding bootcamp I am participating in to learn javascript. 

My goal is to create a simple planetary information tool that provides users with basic information about the planets in the solar system. I want users to be able to choose from the eight planets to learn about, subcribe to an emailing list, vote on their favorite, and write comments to a message board.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://www.npmjs.com/package/mongoose)

## Notes

For reference I will document the journey of implementing project features and requirements here.

From the required features list I chose:
- Develop your project using a common JavaScript framework (React)
- Implement modern interactive UI features (Night/Day Theme)
- Interact with a database to store and retrieve information (MongoDB)
- Create a Node.js server using a modern framework (Express)

## Getting Started

This app relies on two sets of data:

1. Planetary Data
2. User Comments

To setup a database to store user comments, I used a free MongoDB account. The planetary information comes from an array of objects inside server/database/data.js

The learning curve with React and connecting my frontend to the backend was a challenge. The application works with several bugs that I am working on solving over the next week. 

## What Works

- Users can load the application and choose from a dropdown list of planets that then display basic information about the given selection. 
- Users can adjust the color theme between night/day with a slider button in the navigation bar.

## What Doesn't Work

- When a user subscribes the data is not being persisted properly to the database. Specifically, it does persist however the only data being recorded is an ID and __v field. I haven't been able to determine the cause though I believe it's something to do with Axios communicating HTTP requests from my frontend to the backend. The request happens but the data passed through is an empty object.

- My understanding of how to implement this particular stack is underdeveloped and I wasn't able to commit as much time as I wanted to with my current workload. I'm however looking forward to dedicating more time to learn more about the tools I used in this project and how they work.
