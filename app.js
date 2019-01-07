var cookieParser    = require('cookie-parser'),
    nodemailer      = require('nodemailer'),
    bodyParser      = require ("body-parser"),
    express         = require ("express"),
    flash           = require ("connect-flash"),
    app             = express();



/* +++++++++++++++++++++++++++ APP CONFIGURATION +++++++++++++++++++++++++++ */
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
require('dotenv').config();
app.set("view engine", "ejs");
app.use("/build/public", express.static(__dirname + "/build/public"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/node_modules/cookieconsent", express.static(__dirname + "/node_modules/cookieconsent"));
app.use(cookieParser());
app.use(require("express-session")({
    secret: process.env.SESSIONSECRET,
    cookie: {_expires : 30000000},
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

/* +++++++++++++++++++++++++ GLOBAL ELEMENTS CONFIGURATION +++++++++++++++++++++++++ */
app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
 });

/* ++++++++++++++++++++++++++++++ APP ROUTING ++++++++++++++++++++++++++++++ */
/* ROOT ROUTE/ LANDING */
app.get("/", function(req, res){
    res.render("landing");
});

/* IMPRESSUM ROUTE */
app.get("/impressum", function(req, res){
    res.render("impressum");
});

/* DATENSCHUTZ ROUTE */
app.get("/datenschutz", function(req, res){
    res.render("datenschutz");
});

/* NODEMAILER CONTACT FORM */

app.get("/kontakt", function (req, res){
    res.render("contact");
});

app.post('/kontakt', function (req, res){

    var newContact = {

        firstName:  req.body.firstName,
        lastName:   req.body.lastName,
        email:      req.body.email,
        text:       req.body.message,
        subject:    "Kontakt von Stilbruch.design"
    };

    const botContact = {
        firstName: req.body.firstName1,
        lastName: req.body.lastName1,
        email: req.body.email1,
        text: req.body.message1,
      };
    
      const botArr = Object.values(botContact);
    
      function notEmpty(value) {
        return value !== '';
      }

    var message = '<h1>New message from the contact form:</h1><h3 style="font-weight: normal">First Name: <p style="font-weight: bold; font-size: 1.3em; display: inline">' + newContact.firstName + '</p></h3><h3 style="font-weight: normal">Last Name: <p style="font-weight: bold; font-size: 1.3em; display: inline">' + newContact.lastName + '</p></h3><h3 style="font-weight: normal">E-Mail: <p style="font-weight: bold; font-size: 1.3em; display: inline">' + newContact.email + '</p></h3><h3 style="font-weight: normal">Message: <p style="font-weight: bold; font-size: 1.3em;">' + newContact.text + '</p></h3>';  

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });

    // setup email data
    let mailOptions = {
        from: '"Contact Form Stilbruch.design" <info@stilbruch.design>', // sender address
        to: 'info@stilbruch.design', // list of receivers
        subject: newContact.subject, // Subject line
        text: newContact.message, // plain text body
        html: message // html body
    };

    if (botArr.some(notEmpty) === true) {
        // req.flash('error', 'There was an error with your form submission. Please try again.');
        res.redirect('/');
        return undefined;
      } else {
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });

        req.flash("success", "Vielen Dank, Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich so schnell wie möglich.");
        res.redirect("/");
    }
});

/* +++++++++++++++++++++++++++ APP LISTEN +++++++++++++++++++++++++++ */
app.listen(process.env.PORT || 3000, process.env.ID, function(){
	console.log ("Server started on port 3000 ...");
});