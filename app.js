var express         = require ("express"),
    app             = express();



/* +++++++++++++++++++++++++++ APP CONFIGURATION +++++++++++++++++++++++++++ */
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/semantic", express.static(__dirname + "/semantic"));


/* ++++++++++++++++++++++++++++++ APP ROUTING ++++++++++++++++++++++++++++++ */
/* ROOT ROUTE/ LANDING */
app.get("/", function(req, res){
    res.render("landing");
});

/* +++++++++++++++++++++++++++ APP LISTEN +++++++++++++++++++++++++++ */
app.listen(process.env.PORT || 3000, process.env.ID, function(){
	console.log ("Server started on port 3000 ...");
});