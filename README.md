# ️Apis and Microservices Projects - Request Header Parser Microservice
-  Can get the IP address, preferred languages (from header Accept-Language)
and system infos (from header User-Agent) for my device by calling API microservice. 


## Example Usage:

    [base url]/api/whoami 

## Example Output:

    {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}

**Live URL**:   https://header-parser-node.herokuapp.com/api/whoami

# Table of Contents
-----------------

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [How to use API](#how-to-use)
- [How API works](#how-API-works)
- [Deployment](#deployment)
- [Docker](#docker)
- [License](#license)


## Prerequisites
-------------

- [Node.js 10.13.0+](http://nodejs.org)
 
## Getting Started
---------------
To get start clone the repository:


### Get the latest snapshot
git clone https://github.com/dgifani/header-parser-microservice.git

### Change directory
cd header-parser-microservice

### Install NPM dependencies
npm install

### Then simply start App
npm start

### For Testing
npm test 

    Server Listening on port: 3000
    Test the header parser microservice API, assume API running on ../server.js on port 3000
        √ Test GET request on Path  /api/whoami to return language, ipaddress, software which is user agent

    Test the Micro-Service Header parser API for Invalid request, assume API running on ../server.js
        √ should return 404 if requested for non /api/whoami


    2 passing (45ms)

## Project Structure
-----------------

    | Name                               | Description                             |
    | ---------------------------------- | --------------------------------------- |
    | **test**/test.js                   | Test Script                             |    
    | server.js                          | The Node Express server file.           |
    | package.json                       | NPM dependencies.                       |
    | Dockerfile                         | Build Docker Container.                 |



## List of Packages
----------------

    | Package                         | Description                                |
    | ------------------------------- | ------------------------------------------ |
    | express                         | Minimalist web framework Version "^4.16.4" |
    | mocha                           | Test framework. Version "^5.2.0"           |
    | chai                            | BDD/TDD assertion library. Version "^4.2.0"|
    | chai-http                       | BDD/TDD assertion library. Version "^4.2.1"|


## How to use API

   Returns the object of include agent details, language support and ip address of host

* **URL**

       The URL Structure (base url, port, /)
       Example  http://localhost:3000/api/whoami   

* **Method:**
       `GET` 
       This API only supprrt GET method
  

* **Success Response:**
  
   `return the JSON object included date time in unix and UTC items`
  * **Code:** 200 <br />
    **Content:** 
    ```json
       {"ipaddress":"localhost:3000","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0"}
    ```
* **Error Response**
  * **Code:** 404 <br />
    **Content:** 

            <!DOCTYPE html>
             <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Error</title>
            </head>
            <body>
                <pre>Cannot PUT /assas</pre>
            </body>
            </html>

   
# How API Works

`Please refer to Server.js and ./test/test.js to see code comments for each section of code`


# Deployment

#### Heroku
    The below information valid for gitlab CI/CD to deploy in Heroku
* Add yml file to root directory of the project
* Create a new App in Heroku
* Add API-Key to gitlab Env file
* Give it a shot    
         


#### Docker
       Docker allows the code deployable to any docker compatible platform
#### Build image 
* docker build -t your-image-name>/img01 .

#### run image in container
* docker run -p 3000:3000 -d your-image-name>/img01:latest

#### Get container ID
* $ docker ps

#### Print app output
* $ docker logs `container id` 


#### Enter the container
* $ docker exec -it `container id` /bin/bash
  
### Test
* curl -i localhost:3000  

# License
MIT
