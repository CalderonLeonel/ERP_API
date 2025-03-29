import pool from "../database/Keys";
const ciudades = {};

ciudades.listarciudades = async (req, res) => {
  const idpai = req.params.p1;

  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarciudades($1::smallint)", [
        idpai
      ])
    ).rows;

    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error,
    });
  }
};

module.exports = ciudades;
