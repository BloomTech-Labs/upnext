# Seen My Kid?
_Seen My Kid?_ allows event organizers to provide optional realtime scheduling updates to event attendees. Organizers are able to schedule events using a web application. A sign-up link can then be provided to attendees to sign up for realtime updates to the performance schedule. When a set completes and the next performance is queued, text messages or emails will be dispatched to inform subscribers.

### Prerequisites
Here is a list of the things that you will need in order to run the necessary software with installation instructions.
  
This project makes use of the Twilio API.  Therefore, you must obtain an API key from Twilio before you can use this application. You can sign up for a free API key on https://twilio.com.


### Installing
First clone down the repo from your terminal.
```bash
git clone https://github.com/lambda-school-labs/seenmykid.git
```
Move to the cloned directory in your terminal and navigate to the server directory and install dependencies with yarn.
```bash
cd seenmykid/server
yarn
```
After installation, run `yarn start` to start the server.   
Now move to the client directory and once again run install dependencies.
```bash
cd ../client
yarn
```
Now run `yarn start` to begin the development server.  Browse to http://localhost:5000 to see changes you make to the application in realtime.  
  
  

### Running Automated Tests
Testing was done using Jest.  All of our tests can be run by running `npm run tests` in your terminal from the root of the project directory.
```bash
# This is an explanation of the following test, including what we are testing for.
This is an example of a test.
```

## Deployment
Project can be deployed using Heroku. Here are the steps needed to deploy the application.

## Built With
* [Node](https://nodejs.org/dist/v9.11.1/) - Development platform
* [React](https://github.com/facebook/react) - JavaScript UI library
* [Redux](https://github.com/reactjs/redux/tree/master/docs) - State management
* [PostgreSQL](https://www.postgresql.org) - Persistent Storage
* . . . and more to come

## Authors
* John Pelley - [jryanp1](https://github.com/jryanp1)
* Petrell Vereen - [darkness198](https://github.com/darkness198)
* Raymond Rosario - [nomyard](https://github.com/nomyard)
* Randall Whitlock - [randallwhitlock](https://github.com/randallwhitlock)

## License
This project's licensing has yet to be determined.

## Acknowledgements
We have some people to thank . . .