const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('xxxxxxx'); //BOT TELEGRAM ID
const nodemailer = require('nodemailer');

const callQuery = async(req, res) => {
    try {

        const datos = req.params.data;


        const accountSid = 'XXXXXXXX'; //TWILIO ACCOUNT
        const authToken = 'XXXXXXX'; //TWILIO TOKEN
        const client = require('twilio')(accountSid, authToken);

        client.calls

        //Prueba de telefono
            .create({
                url: 'https://handler.twilio.com/twiml/XXXXXXXXXX', //TWILIO TWIML
                to: '+506XXXXXXXX', //INTERNATIONAL PHONE NUMBER
                from: '+XXXXXXXXX' //TWILIO PHONE NUMBER
            })
            .then(call => console.log(call.sid))
            .done();

        //------Envio de mensaje Telegram------//

        try {
            bot.sendMessage('XXXXXXXXX', 'Se ha generado un reporte de emergencia: ' + datos); //TELEGRAM USER ID
        } catch (error) {
            bot.sendMessage('XXXXXXXXX', 'Se ha generado un error en el bot'); //TELEGRAM USER ID
        }
        console.log(datos);

        //------Envío de correo electronico------//
        try {
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: '465',
                secure: true,
                service: 'gmail',
                auth: {
                    user: 'XXXXXX@gmail.com', //GMAIL ACCOUNT
                    pass: 'XXXXXXXX' //GMAIL PASSWORD
                }
            });

            var mailOptions = {
                from: 'XXXXXXX@gmail.com', //MAIL SENDER
                to: 'XXXXXXXX@gmail.com', //MAIL TO RECEIVE
                subject: 'Correo de emergencias',
                text: 'Este es un correo electrónico generado automáticamente, esta es una notificacion de emergencia por: ' + datos
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        } catch (error) {
            console.log('Error al enviar correo: ' + error)
        }


    } catch (error) {
        console.log('Error: ' + error)
    } finally {
        console.log('Llamada finalizada')
    }
}

module.exports = {
    callQuery
}