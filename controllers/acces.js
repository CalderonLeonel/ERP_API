import pool from "../database/Keys";
const accesos = {};

accesos.listaraccesos = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listaraccesos()")
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

module.exports = accesos;