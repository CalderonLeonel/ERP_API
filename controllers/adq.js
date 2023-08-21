import pool from "../database/Keys";
const adquisicion = {};

adquisicion.listarcotizaciondeadquisicion = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_cotizaciondeadquisicion()")).rows;
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
    });
  }
};


//cotizacionitem

adquisicion.listarcotizacionitem = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_cotizacionitem()")).rows;
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
    });
  }
};

module.exports = adquisicion;