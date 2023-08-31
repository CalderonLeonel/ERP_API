import pool from "../database/Keys";
//const pool = require ('../database/Keys')
const auth = {};

auth.signUp = (req, res) => {
  console.log(req.body);
  res.send("REGISTRADO AMIGO");
};

auth.signin = async (req, res) => {
  const { user, password } = req.body;
  try {
    const usuario = await (
      await pool.query("select * from proyectoerp.erp_auth($1,$2)", [
        user,
        password,
      ])
    ).rows;
    if (usuario.length > 0) {
      res.status(200).json({
        /*usuario: usuario[0].id_usuario,
        //id_sede:usuario[0].id_sede,
        id_cargo: usuario[0].id_cargo,
        nombres: usuario[0].nombres,
        paterno: usuario[0].paterno,
        materno: usuario[0].materno,*/
      });
    } else {
      res.status(200).json({
        message: "EL USUARIO NO EXISTE :(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};

module.exports = auth;
