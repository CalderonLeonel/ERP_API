import pool from "../database/Keys";
const usuarios = {};

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
  const acc = req.params.p5;
  try {
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
