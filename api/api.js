require("dotenv").config();

const nodemailer = require("nodemailer");
const app = require("express")();

app.post("/send", function (req, res, next) {
  var transporter = nodemailer.createTransport({
    host: "localhost",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      type: "login",
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: "Testing",
    html: "<p>Hi!</p>",
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
});

app.listen(app.listen(3000, () => console.log(`Testing`)));
