module.exports = {
  log: {
    level: 'error'
  },
  datastores: {
    adapter: 'sails-postgresql',

    url: 'postgres://postgres:waterfall1@localhost:5432/vuesails'
    // models: {
    //   connection: 'someMongodbServer'
    // }
  }
};
