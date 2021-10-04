# Apartment test

## Description:

Back end solution for the apartment test.

The assignment can be seen at DESCRIPTION.md

It is composed of several routes.

### Register user

this route registers a user if he/she does not exists
the request looks like:

```bash
curl --location --request POST 'localhost:5000/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fname": "Oscar",
    "lname": "Whatever",
    "address": "Hell street 145",
    "city": "Madrid",
    "country": "Spain",
    "geoLocation": [
        40.439609,
        -3.639506
    ],
    "password": "Hello123@#",
    "status": "active",
    "email": "oscar@oscar.com",
    "role": "admin"
}'

```

and returns a true or false if user is registered

### Login user

this route allows a user to register and get a JWT to make further requests

```bash
curl --location --request POST 'localhost:5000/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "password": "Hello123@#",
    "email": "oscar@oscar.com"
}'

```

### get user

this route allows a user or an admin to get the user's info, A user can only get his/her information, and admin can get anyone. Make sure you include the right JWT.

```bash
curl --location -g --request GET 'localhost:5000/user?where[0][id]=f9869344-e189-4271-ab26-d20e02b9c683' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5ODY5MzQ0LWUxODktNDI3MS1hYjI2LWQyMGUwMmI5YzY4MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDM5ODgwMiwiZXhwIjoxNjMyNDcyNDAyfQ.MdxBFfVGvXS89-Sotjo_KlfWxMP45qL6k2f_e80uyX0'
```

### get all users

this route allows an admin to get all the user's info. Make sure you include the right JWT.

```bash
curl --location --request GET 'localhost:5000/user/all' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5ODY5MzQ0LWUxODktNDI3MS1hYjI2LWQyMGUwMmI5YzY4MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDM5ODgwMiwiZXhwIjoxNjMyNDcyNDAyfQ.MdxBFfVGvXS89-Sotjo_KlfWxMP45qL6k2f_e80uyX0'
```

### post an apartment

this route allows a registered user to post an apartment

```bash
curl --location --request POST 'localhost:5000/apartment' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5ODY5MzQ0LWUxODktNDI3MS1hYjI2LWQyMGUwMmI5YzY4MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDM5ODgwMiwiZXhwIjoxNjMyNDcyNDAyfQ.MdxBFfVGvXS89-Sotjo_KlfWxMP45qL6k2f_e80uyX0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "address": "Puerta de Alcala 1",
    "city": "Madrid",
    "country": "Spain",
    "zipCode": "28035",
    "geoLocation": [
        40.420112,
        -3.688233
    ],
    "numberOfRooms": 3
}'
```

### get all apartments

this route allows a registered user to see all the partments

```bash
curl --location -g --request GET 'localhost:5000/apartment/all?where[1][country]=Spain&where[2][numberOfRooms]=3&where[3][distance]=1000' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY5ODY5MzQ0LWUxODktNDI3MS1hYjI2LWQyMGUwMmI5YzY4MyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDM5ODgwMiwiZXhwIjoxNjMyNDcyNDAyfQ.MdxBFfVGvXS89-Sotjo_KlfWxMP45qL6k2f_e80uyX0'
```

### get an apartment

this route allows a registered user to see an partments

```bash
curl --location -g --request GET 'localhost:5000/apartment?where[0][id]=b9a2f128-4fb5-4898-aadc-8979362da3cc' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyNmE0ZThiLWQ5NWQtNDc4NS05YzQxLThmNDJjZGQzZTVmMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDQwMDkzMiwiZXhwIjoxNjMyNDc0NTMyfQ.mH5iEeP6dRtnO0bnUuNwV9mR7vUfiJCmfWY62mHzi58'
```

### post a favorite apartment

this route allows a registered user to save a favorite apartment

```bash
curl --location --request POST 'localhost:5000/favorite' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyNmE0ZThiLWQ5NWQtNDc4NS05YzQxLThmNDJjZGQzZTVmMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDQwMDkzMiwiZXhwIjoxNjMyNDc0NTMyfQ.mH5iEeP6dRtnO0bnUuNwV9mR7vUfiJCmfWY62mHzi58' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "apartmentId": "b9a2f128-4fb5-4898-aadc-8979362da3cc"
    }
]'
```

### get favorite apartments

this route allows a registered user to get all his/her favorite apartments

```bash
curl --location --request GET 'localhost:5000/favorite' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMyNmE0ZThiLWQ5NWQtNDc4NS05YzQxLThmNDJjZGQzZTVmMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDQwMDkzMiwiZXhwIjoxNjMyNDc0NTMyfQ.mH5iEeP6dRtnO0bnUuNwV9mR7vUfiJCmfWY62mHzi58'
```

## Run it

### Run local

Clone it, create a .env file folowing the .example.env, npm install and:

```bash
npm run start:dev
npm start
```

### Run with docker:

Clone it, create a .env file folowing the .example.docker.env, and:

```bash
docker-compose build
docker-compose up
```

I mapped port 5000 so if you execute it on your local machine just do after do http://localhost:5000/whatever

# Structure:

The application is fairly simple. My intention is to have a little node app that can scale pretty easy by adding new functionalities. Can be used as a monolith or micro service with http.

I use express with typescript as the framework since I am more familiar to that approach, but I have used other frameworks as well and plain node

### Main index

The project structure is quite simple. I have a main index file where I inject the routes and middleware to be used application wide. Helmet is used for security, I also apply a logger middleware that will register each request and log it with a unique id in case we through an error we can find out what the request was.

At the end we catch any error not handled by the rest of the application, like that the application will not stall unless we want to.

Logging is done into a file but the ideal scenario would be to log it to elastic search for example to be used with kibana….. we have the usual logs, info, warn and error

### http and infra

http folder. In this folder we have the routes, handlers (controllers) and middleware. I like to keep all of that separate in case that a change in framework is required
The routes are used to inject specific middleware related to the route and finally redirect the request to the right handler.
The middleware folder contains specific middleware to be injected into a specific route route, for example a middleware that process the query params like where clauses, limits and skips in case we want to use pagination (I have not applied pagination to this test).
I also included a middleware used to authorised users to the different routes

Then, we have the handlers, those are the ones that receive the express requests and and call the right service to handle the requests. Also, there is a try catch on each handler, so any errors that happen below will be catch there. That’s why you will not see many try and catches in the services, cause the intention is to catch them at the highest level and handle them

The infra folder is where we would have the abstractions for the DB for example. Is is done this way to abstract the DB methods, like that each service that needs to interact with the DB will not know where the data is coming from. I kind of fake a mongo DB in this project using underscore….. Like that you can test it without having to use a real DB

### use-cases

Here where we defined the business rules. This can be compare to the services in other frameworks or logic. Again, this is separated from the high level infra folder and from the entities used in the app. Can be reused independently of the framework.Here we also inject the external dependencies to the service using dependency inversion and injection.

### entities

Here we have the interfaces for the entities used in the app. Then we have a folder for each entity to apply the enterprise business rules, like how we want the data in the entity to be. Again this is separated also from the higher level use-cases.

### utils

Common functions for the rest of the app

### finally

I included some basic test with Jest here, again just for this test and the time I had I did not include a lot of tests, but just to show you that I know how to do it.
I think that is all, if you have any questions please contact me and I will try to answer them.
