# UpNext

UpNext allows event organizers to provide realtime scheduling updates to event attendees. Organizers are able to schedule events using a web application. A sign-up link will be provided to attendees to sign up for realtime performance schedule updates. When a performance completes and the next one is queued, text messages or emails will be dispatched to inform subscribers.

## Setup

### Prerequisites

What you'll need:

* Twilio API key - In order to automate text messages to subscribers, you'll need to set up a Twilio account at https://twilio.com to receive an API key
* Stripe API key - In order to receive payments from subscribers, you'll need to set up a Stripe account at https://stripe.com to retrieve an API key

### Installing

First, clone the repository from your terminal.

```bash
git clone https://github.com/lambda-school-labs/seenmykid.git
```

Navigate in the local repo to the `server` directory, then install dependencies with yarn.

```bash
cd seenmykid/server
yarn
```

Run `yarn start` to start the server.
Now move to the client directory and once again install dependencies.

```bash
cd ../client
yarn
```

Now run `yarn start` to begin the development server. Browse to http://localhost:3000 to see changes you make to the application in realtime.

### Running Automated Tests

Testing will be done using Jest. Run tests using `yarn tests` in your terminal from the root of the project directory.

```bash
# This is an explanation of the following test, including what we are testing for.
This is an example of a test.
```

## Deployment

Project deployed using Heroku. Here are the steps needed to deploy the application.

---

**TODO:** Enter detailed instructions for deploying the app, including continuous integration techniques.

---

## Built With

* [Node](https://nodejs.org/dist/v9.11.1/) - Development platform
* [React](https://github.com/facebook/react) - JavaScript UI library
* [Redux](https://github.com/reactjs/redux/tree/master/docs) - State management
* [PostgreSQL](https://www.postgresql.org) - Persistent Storage
* . . . and more to come

## Authors

The major contributors who brought this project to life:

* John Pelley - [jryanp1](https://github.com/jryanp1)
* Petrell Vereen - [darkness198](https://github.com/darkness198)
* Raymond Rosario - [nomyard](https://github.com/nomyard)
* Randall Whitlock - [randallwhitlock](https://github.com/randallwhitlock)

## License

This project's licensing has yet to be determined.

## Acknowledgements

We have some people to thank . . .
