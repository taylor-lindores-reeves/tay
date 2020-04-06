const nodemailer = require("nodemailer");
const pug = require("pug");
const juice = require("juice");
const htmlToText = require("html-to-text");

// Create a SMTP transporter object
const transport = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  secure: false,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(`${__dirname}/email/${filename}.pug`, options);
  const inlined = juice(html);
  return inlined;
};

exports.send = async (options, err) => {
  const html = generateHTML(options.filename, options);
  const text = htmlToText.fromString(html);
  const mailOptions = {
    from: "lindoresgriffin@gmail.com",
    to: "taylor@lindoresgriffin.co.uk",
    subject: options.subject,
    html,
    text
  };

  return transport
    .sendMail(mailOptions)
    .then(stuff => {
      console.log(stuff);
    })
    .catch(err => {
      console.log(err);
    });
};
