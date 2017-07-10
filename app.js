//incluimos dependencia
var express  = require("express"),  
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());


app.get('/', function(req, res) {
  res.send("Hello world!");
});

//API routes
routes = require('./routes/tvshows')(app);
/*
router.route('/tvshows')
   .get(tvshowCtrl.findAllTVShows)
   .post(tvshowCtrl.addTVShow);

router.route('/tvshows/:id')
   .get(tvshowCtrl.findById)
   .put(tvshowCtrl.updateTVShow)
   .delete(tvshowCtrl.deleteTVShow);

app.use('/api', router);
*/
//definimos puerto a usar
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});
server.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});