const WikiController = require('../controllers/wiki_controller');

module.exports = (app) => {
  app.get('/api/wiki', WikiController.searchProducts);

  app.post('/api/wiki', WikiController.addProduct);

  app.delete('/api/wiki', WikiController.removeProduct);
};
