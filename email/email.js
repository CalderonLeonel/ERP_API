const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    //service: "Gmail", // Cambia a tu proveedor de correo electrónico
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'drymixnoresponder@gmail.com', // Tu dirección de correo electrónico
      pass: 'lrra bekh gcuo tbel', // Tu contraseña
    },
  });
  
//Revisa si el usuario y contraseña del correo funcionan
//NOTA IMPORTANTE: Si por alguna razon esta verificacion falla, la compilacion de ERP_API fallará, para solucionarlo, comenta este metodo
transporter.verify().then(() => {
    console.log('LOG: Correo Electrónico listo para enviar.');
})

module.exports = transporter;