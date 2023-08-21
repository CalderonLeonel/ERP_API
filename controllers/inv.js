import pool from "../database/Keys";
const inventario = {};


//Transaccion_Inventario
inventario.listarTransacciones = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_transaccion_inventario()")).rows;
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


//Item

inventario.listarItem = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_item()")).rows;
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


//Tipo De Item

inventario.listarTipoItem = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_tipodeitem()")).rows;
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

module.exports = inventario;