const WikiController = require('../controllers/wiki_controller');

module.exports = (app) => {
  app.get('/api/wiki/', WikiController.getAllProducts);
};
