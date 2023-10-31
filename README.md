
# To-DO-list-with-MongoDB
This is a simple To-Do List web application built using Node.js, Express, and MongoDB. It allows users to add, edit, and remove tasks from their to-do list. The application uses the EJS template engine for rendering views and MongoDB to store task data.
# To-Do List Web App
This is a simple To-Do List web application built using Node.js, Express, and MongoDB. It allows users to add, edit, and remove tasks from their to-do list. The application uses the EJS template engine for rendering views and MongoDB to store task data.
## Features

- Edit existing tasks.
- Remove tasks from the list.
- Add tasks to the to-do list.




## Getting Started

- Clone the repository:
```bash
  git clone <repository-url>
```

- Install dependencies:
```bash
  npm install
```
- Set up MongoDB:

    Replace the MongoDB connection URL in app.js with your own MongoDB URL.
- Run the application:
```bash
  npm start
```
The application will be accessible at http://localhost:3000 by default.

## Usage
- Visit http://localhost:3000 in your web browser.
- The default to-do list items will be displayed.
- Add new tasks by entering text in the input field and clicking the "Add" button.
- Edit tasks by clicking the "Edit" button next to each task.
- Remove tasks by clicking the "Remove" button next to each task.
## Project Structure
- public: Contains static files like stylesheets.
- views: Contains EJS templates for rendering HTML.
- app.js: Main application file with the server and route configurations.
- models: Contains MongoDB schema definitions.

## Dependencies
- Express: Web application framework for Node.js.
- Body-parser: Middleware to parse incoming request bodies.
- Mongoose: MongoDB object modeling tool.
- EJS: Embedded JavaScript templating.

## Acknowledgments
- This project was built as a learning exercise.
- Thanks to Express, MongoDB, and EJS for making development easier.
