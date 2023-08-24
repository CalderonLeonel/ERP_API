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


inventario.agregarTransaccion = async (req, res) => {

  const idItem = req.params.p1;
  const movimiento = req.params.p2;
  const cantidad  = req.params.p3;
  const costounitario  = req.params.p4;
  const metodovaluacion  = req.params.p5;
  const est  = req.params.p6;
  try {
    await pool.query("select erp_produccion.erp_insertar_transaccion_inventario($1,$2,$3,$4,$5,$6)",[idItem,movimiento,cantidad,costounitario,metodovaluacion,est]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
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