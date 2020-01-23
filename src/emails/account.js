const sgMail = require ('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'devaa.adithya@gmail.com', 
        subject: 'Thanks for Joining In', 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancallationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'devaa.adithya@gmail.com', 
        subject: 'Sorry to see you go',
        text: `We apologize ${name} to let you go, do you wanna tell us what happened?`,
        html: '<strong> We also wanna fuck you if you have any concern regarding this'
    })
}

module.exports = {
    sendWelcomeEmail, 
    sendCancallationEmail
}