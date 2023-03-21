const wikiRoutes = require('./wiki_routes');
const gameRoutes = require('./game_routes');

module.exports = (app) => {
  wikiRoutes(app);
  gameRoutes(app);
};
