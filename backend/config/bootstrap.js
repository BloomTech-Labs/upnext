/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

const users = [
  {
    name: 'Joe',
    email: 'joe@joe.com',
    password: 'toasty',
    isAdmin: true
  },
  {
    name: 'Anna',
    email: 'anna@anna.com',
    password: 'sunflower'
  },
  {
    email: 'Tom@jerry.com',
    name: 'Tom',
    password: 'jerry'
  }
]

const events = [
  {
    title: 'Event1',
    groupsWithTime: { Group1: '1:00', Group2: '2:00', Group3: '3:00' },
    startDate: '9/6/2018',
    description: 'The first event ever!!!!'
  },
  {
    title: 'Event2',
    groupsWithTime: { Group1: '1:00', Group2: '2:00', Group3: '3:00' },
    startDate: '7/8/2018',
    description: 'The second event ever!!!!'
  },
  {
    title: 'Event3',
    groupsWithTime: { Group1: '1:00', Group2: '2:00', Group3: '3:00' },
    startDate: '11/15/2018',
    description: 'The third event ever!!!!'
  }
]

module.exports.bootstrap = function(cb) {
  users.forEach(user => {
    User.findOne({
      name: user.name
    }).exec((error, potentialUser) => {
      if (error) sails.log.error(error);

      if (!potentialUser) {
        User.create({
          name: user.name,
          password: user.password,
          email: user.email,
          isAdmin: user.isAdmin
        }).exec((error, user) => {
          sails.log.info('Created fixture user', user);
        });
      }
    });
  });

  events.forEach(event => {
    Event.create({
      title: event.title,
      groupsWithTime: event.groupsWithTime,
      startDate: event.startDate,
      description: event.description
    }).exec((error, event) => {
      if (error) sails.log.error(error);

      sails.log.info('Created fixture event', event);
    });
  });

  cb();
};
