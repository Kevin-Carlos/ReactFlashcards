# Flashcards

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## `How it works`

The app will create a document of 'flashcards' within the collection 'data' in\
MongoDB. On entry, it will reset the fields and the flashcard will only ever display
the first entry within the DB, not the most recent. There will be arrows on either side
of the flashcard that let you see the next card, or go back to a previous.

## Available Scripts

In the project directory, you can run:

### `Docker`

This application has been configured to run within a container and at the moment be ran using `docker-compose up`

### `Additional Info`

The mongoDB server is directed to default port: 27017 \
The server listens to port 5000.

### `Future Work`

* Fix the containerization for Mongo to retry if connection at the time of running fails.

* Deploy on cycle.io

* Change implementation to display most recently entered card rather than first
in the DB.

* Port this to Typescript.
