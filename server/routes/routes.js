var path = require('path');

module.exports = function(router) {
  // router.get('/', function(req, res) {
  //   //res.sendFile('index.html', {root: path.join(__dirname, '../../client')});
  // });

  router.post('/status', function(req, res) {
    //console.log('======here=====');
    console.log(req.body);
    res.send( {message: req.body.text} );
  });

  router.get('/status', function(req, res) {
    res.send('hello');
  });
};
