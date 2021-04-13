<!-- @format -->

#Wordstats
This is a repo to generate n-grams from a sequence of words or characters, group them by their counts and visulalize them through a table or barchart.

##About this repo
This repo consist of two major apps. The `frontend` and the `backend`.
The front-end is build on `react.js` while the back-end is built on `django`
The front-end holds the client-side application ie the html code etc which the user/client will see when they visit this application.
The back-end hold the server-side application ie the services that calculates, validates and group n-gram pairs.

## Setup

### Using Docker

For simplicity and to maintain a common environment accross different machines. This project has been bootstraped by docker.
In order to build and run the project this way, we need to have installed `docker` and `docker-compose`.
Instructions on how to install them are [here](http://docs.docker.oeynet.com/engine/installation/)

After installing, clone this repo onto you local machine and navigate to the root folder _where the docker-compose file is located_.

And run the following command:

```bash
$ docker-compose up --build
```

The command will build the images and run it.
To interact with the project, open your browser and type _`http://localhost:3000`_ on the address bar.

**_Nb_**
if you would need to run each app in isolation run the following commands:
_for the backend_

```bash
$ docker-compose run backend
```

_for the frontend_

```bash
$ docker-compose run frontend
```

#### tests

To run the tests, type the following in the terminal

```bash
$ docker-compose run backend pytest
```

### Manual setup

#### frontend

Ensure you have node.js installed `node.js`
change directory into the frontend app

```bash
$ cd frontend
```

Install the dependencies:

```bash
$ npm install
```

Once dependencies have been installed, you can run `npm start` to start the application.

### backend

Ensure you have python install at least `python => 3.6`
create a virtual environment at a directory of your choosing.

```bash
$ python3 -m venv <name_of_virtualenv>
```

To activate your virtual environment run

```bash
$ source venv/bin/activate
```

change directory into the backend services

```bash
$ cd backend
```

install dependencies

```bash
pip install -r requirements.txt
```

To run tests run the following command

```bash
$ pytest
```

To run the server, type the following commands
```bash
$ python manage.py makemigrations && python manage.py migrate && python manage.py runserver 
```
The above command will run migrations and setup an admin user while at the same expose your app on port `8000`

