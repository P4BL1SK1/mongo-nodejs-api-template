# Template repository for a NodeJs application

In this repository you can find an easy and fast way to set up an API using NodeJS.

Heavily inspired by [this repository](https://github.com/surprograma/nodejs-api-seed).

## Technology stack

The principal technologies that bring life to this app are:

- [NodeJS](https://nodejs.org/es/).
- [ExpressJS](https://expressjs.com/es/).
- [Docker-compose](https://docs.docker.com/compose/gettingstarted/).
- [MongoDB](https://www.mongodb.com/es).
- [Mongoose](https://mongoosejs.com/).

## Pre-requisites

- Node installed (Version 14 or higher).
- Docker compose installed.

## Setting up the workspace

Assuming that you're gonna work with `Docker`, the first thing that you have to do is run the Docker container with the next command:

```bash
# This command starts the container in detached mode which means that runs the container in background.
# And it is persistent even if the pc is restarted or shutted down.
docker-compose up -d # OR docker-compose up --detach

# Also you can run the script in the root  directory to stop the container delete the data and rerun.
sh build_docker-compose.sh


# Then copy the example environment variables to the actual environment variables file with this command:
cp .env.example .env
```

## Setup without docker

If you want to work without Docker you can do it. All you have to do is put your Mongo cluster uri in the env variable `MONGODB_REMOTE_URI` like this:

```env
MONGODB_REMOTE_URI=mongodb+srv://<user>:<password>@<cluster>.h0lr2.mongodb.net/
```

## Running the app.

If you already complete all the previous steps you are ready to run your app.

```bash
#First install the node dependencies.
npm i

# Then start the app
npm start
```
