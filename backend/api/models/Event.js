/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    title: {
      type: 'string',
      description: 'Title of the event',
      required: true,
      example: "Mother's Day Parade"
    },

    groupsWithTime: {
      type: 'json',
      description: 'Groups that are performing',
      required: true,
      example: {
        0: { Group1: '1:00' },
        1: { Group2: '2:00' },
        2: { Group3: '3:00' }
      }
    },

    startDate: {
      type: 'number',
      description:
        'JS timestamp represeting the start date and time of the event',
      example: 1502844074211
    },

    description: {
      type: 'string',
      required: true,
      description: 'A description of the event',
      maxLength: 120,
      example: 'This is a testing event, made only for testing and whatnot'
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    subscribers: {
      collection: 'user',
      via: 'subscribedEvents'
    },
    owner: {
      model: 'user'
    }
  }
};
