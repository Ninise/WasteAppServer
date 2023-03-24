const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/waste_app');
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('Error', error);
    });
});

beforeEach((done) => {
  const { product } = mongoose.connection.collections;
  product.drop(() => {
    done();
  });
});
