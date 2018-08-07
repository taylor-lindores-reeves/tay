const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');

const transport = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    secureConnection: true,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    tls: {
        ciphers: 'SSLv3'
    }
});


const generateHTML = (filename, options = {}) => {
    const html = pug.renderFile(`${__dirname}/email/${filename}.pug`, options);
    const inlined = juice(html);
    return inlined
};

exports.send = async (options, err) => {
    const html = generateHTML(options.filename, options);
    const text = htmlToText.fromString(html);
    const mailOptions = {
        from: 'taylor-lindores@hotmail.co.uk',
        to: "taylor@lindoresgriffin.co.uk",
        subject: options.subject,
        html,
        text
    }

    return transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email was successfully sent.');
        }
    })
};