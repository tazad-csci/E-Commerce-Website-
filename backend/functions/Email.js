const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'PartsBuyerNIU@gmail.com',
    pass: '@m2YR&n^=mjpK#VA'
  }
});

const mailOptions = {
  from: 'vindication@enron.com',
  to: 'friendsofenron@gmail.com, enemiesofenron@gmail.com',
  subject: 'Invoices due',
  text: 'Dudes, we really need your money.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


function sendConfirmation(email, orderNumber, parts){
    var email_body = "Thank you for your order! If you forgot what you ordered... Heres a list of partS!";
    parts.forEach(part => {
        email_body += '\n';
        email_body += `${part.part.description} $${part.part.price} ${part.qty}`;
    });
    email_body += "\nThats it!";
    
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

}

module.exports = {sendConfirmation, sendShipped}