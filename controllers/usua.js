import pool from "../database/Keys";
import transporter from '../email/email'
const usuarios = {};

async function enviarEmail(email, nomEmpl, user, pass) {
  try {
      await transporter.sendMail({
          from: '"Drymix SRL" <drymixnoresponder@example.com>', // sender address
          to: email, // list of receivers
          subject: "! Bienvenido a Drymix Bolivia ! "+nomEmpl+". Tu registro como empleado a sido exitoso ✔",
          text: "¡ Drymix te da la bienvenida ! Usa tus credenciales para entrar a tu cuenta de Drymix.",
          html: "<span>Estos son tus datos de inicio de sesión generados automaticamente.</span>" +
                  "<b>No pierdas ni brindes esta información a nadie, tu cuenta es tu huella digital en el sistema.</b>" +
                      "<li>Usuario: "+user+"</li>"+
                      "<li>Contraseña: "+pass+"</li>", 
      });
      console.log("LOG: Email Enviado")
  } catch (error) {
      console.log(error);
  }
}

usuarios.listarusuarios = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarusuarios()")
    ).rows;

    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    })
    console.log("ERROR: "+error.message);
  }
};

usuarios.addusuario = async(req,res) =>{
  const idusu = req.params.p1;
  const nom = req.params.p2;
  const pass = req.params.p3;
  const tip = req.params.p4;
  const emal = req.params.p5;
  const nomEmpl = req.params.p6;
  const acc = req.body;
  try {
      //Enviar Correo Electronico con Credenciales
      //await enviarEmail("leonel.calderon.rivas@gmail.com","LEONEL MARCELO","crl423423","34234");
      await enviarEmail(emal,nomEmpl,nom,pass);
      await pool.query("select proyectoerp.erp_addusuario($1,$2,$3,$4,$5)",[idusu,nom,pass,tip,acc]);
                           
             res.status(200).json({
                 message:'Se ha registrado el usuario con éxito.'
           
             }) 
         
  } catch (error) {
         res.status(500).json({
             message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
             error
         })
         console.log("ERROR: "+error.message);
     }
 
 };

usuarios.editarusuario = async(req,res) =>{
  const idusu = req.params.p1;
  const nom = req.params.p2;
  const tip = req.params.p4;
  const acc = req.params.p5;
  try {
      await pool.query("select proyectoerp.erp_editarusuario($1,$2,$3,$4)",[idusu,nom,tip,acc]);
          res.status(200).json({
              message:'SE GUARDARON LOS CAMBIOS!!!'
          })
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
      console.log("ERROR: "+error.message);
  }
};

usuarios.deleteusuario = async(req,res) =>{
  const idusuario = req.params.p1;
  try {
      await pool.query("select proyectoerp.erp_deleteusuario($p1)",[idusuario]);
      res.status(200).json({
          message:'SE GUARDARON LOS CAMBIOS!!!'
      })
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
      console.log("ERROR: "+error.message);
  }
};

usuarios.getusuario = async(req,res) =>{
  const idusuario = req.params.p1;
  try {
      const resultado = await(await pool.query("select * from proyectoerp.erp_getusuario($p1)",[idusuario])).rows;
      if (resultado.length>0){
          res.status(200).json({resultado});
      }
      else {
          res.status(200).json({
              message:"El usuario no existe.",
              NotFount:true,
          });
      }
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
      console.log("ERROR: "+error.message);
  }
};

usuarios.offusuario = async (req, res) => {
  const idnom = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offusuario($1)", [idnom]);

    res.status(200).json({
      message: "REGISTRO MODIFICADO CORRECTAMENTE",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error,
    });
  }
};

usuarios.onusuario = async (req, res) => {
  const idnom = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onusuario($1)", [idnom]);

    res.status(200).json({
      message: "REGISTRO MODIFICADO CORRECTAMENTE",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error,
    });
  }
};

module.exports = usuarios;
