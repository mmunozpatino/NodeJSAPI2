//incluimos dependencia
var express = require ("express"),
   app = express(),
   bodyParser = require("body-parser"),
   methodOverride = require ("method-override"),
   mongoose = require('mongoose');
var model = require('./models/tvshow')
//importamos controllers
var tvshowCtrl = require('./controllers/tvshows');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//API routes
var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello word!");
   next();
});

router.route('/tvshows')
   .get(tvshowCtrl.findAllTVShows)
   .post(tvshowCtrl.addTVShow);

router.route('/tvshows/:id')
   .get(tvshowCtrl.findById)
   .put(tvshowCtrl.updateTVShow)
   .delete(tvshowCtrl.deleteTVShow);

app.use('/api', router);

//definimos puerto a usar
mongoose.connect('mongodb://localhost:27017/tvshows', function(err, res){
   if (err) {
      console.log('ERROR: conectando a la base de datos '+ err);
   }
   app.listen(3000, function(){
      console.log("Node server running on 3000");
      console.log("connectado!")
   })
});