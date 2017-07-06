//incluimos dependencia
var express = require ("express"),
   app = express(),
   bodyParser = require("body-parser"),
   methodOverride = require ("method-override"),
   mongoose = require('mongoose');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello word!")
})

app.use(router);

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