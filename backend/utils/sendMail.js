const nodemailer = require("nodemailer");

const sendEMail = (options) =>{
    const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        host: process.env.SERVICE_HOST,
        auth: {
            user: process.env.SERVICE_USER,
            pass: process.env.SERVICE_PASS,
        },
    });

    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text,
    };
    
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
        } else {
            console.log(info);
        }
    })
}



module.exports = sendEMail;  