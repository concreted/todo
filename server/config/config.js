module.exports = function(app, express) {
  app.use(express.static(__dirname + '../../client'));
  app.use(express.static(__dirname + '../../bower_components'));

  var router = express.Router();
  app.use(router);

  require('../routes/routes.js')(router);
};
