const nodemailer = require("nodemailer");

const bodyParser = require("body-parser");

const express = require("express");

const path = require("path");

const app = express();

/* +++++++++++++++++++++++++++ APP CONFIGURATION +++++++++++++++++++++++++++ */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("dotenv").config();

/* ++++++++++++++++++++++++++++++ APP ROUTING ++++++++++++++++++++++++++++++ */

app.post("/test", (req, res) => {
  res.send({ hello: "world" });
});

app.post("/kontakt", (req, res) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    text: req.body.message,
    subject: "Kontakt von Stilbruch.design"
  };

  const message = `<h1>New message from the contact form:</h1><h3 style="font-weight: normal">First Name: <p style="font-weight: bold; font-size: 1.3em; display: inline">${
    newContact.firstName
  }</p></h3><h3 style="font-weight: normal">Last Name: <p style="font-weight: bold; font-size: 1.3em; display: inline">${
    newContact.lastName
  }</p></h3><h3 style="font-weight: normal">E-Mail: <p style="font-weight: bold; font-size: 1.3em; display: inline">${
    newContact.email
  }</p></h3><h3 style="font-weight: normal">Message: <p style="font-weight: bold; font-size: 1.3em;">${
    newContact.text
  }</p></h3>`;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  // setup email data
  const mailOptions = {
    from: '"Contact Form Stilbruch.design" <info@stilbruch.design>', // sender address
    to: "info@stilbruch.design", // list of receivers
    subject: newContact.subject, // Subject line
    text: newContact.message, // plain text body
    html: message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    return undefined;
  });

  res.redirect("/");
  return undefined;
});

// Serve static asset if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

/* +++++++++++++++++++++++++++ APP LISTEN +++++++++++++++++++++++++++ */
app.listen(process.env.PORT || 5000, process.env.ID, () =>
  console.log("Server started on port 5000 ...")
);
