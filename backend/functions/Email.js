const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'PartsBuyerNIU@gmail.com',
    pass: '@m2YR&n^=mjpK#VA'
  }
});

function sendConfirmation(email, orderNumber, parts){
    var email_body = "Thank you for your order! If you forgot what you ordered... Heres a list of parts!\n";
    parts.forEach(part => {
        email_body += '\n';
        email_body += `partname: ${part.part.description} partprice: $${part.part.price} qty: ${part.qty}`;
    });
    email_body += "\n\nThats it!";

    transporter.sendMail({
        from: 'PartsBuyerNIU@gmail.com',
        to: email,
        subject: `Confirmation for order ${orderNumber}`,
        text: email_body
    }, (err, info)=>{
        if (err) {
            console.log(err);
          } else {
            console.log('Email sent: ' + info.response);
          }
    })
}

function sendShipped(email, orderNumber){
    var email_body = "Your order has shipped!";
    transporter.sendMail({
        from: 'PartsBuyerNIU@gmail.com',
        to: email,
        subject: `Shipping Confirmation for order ${orderNumber}`,
        text: email_body
    }, (err, info)=>{
        if (err) {
            console.log(err);
          } else {
            console.log('Email sent: ' + info.response);
          }
    })
}

module.exports = {sendConfirmation, sendShipped}