import pool from "../database/Keys";
const produccion = {};

produccion.listarproduccion = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarproduccion()")
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

produccion.listarproduccioninh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarproduccioninh()")
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

produccion.addproduccion = async (req, res) => {

    const idprodu = req.params.p1;
    const nomprod = req.params.p2;
    const codprod = req.params.p3;
  try {
    await pool.query("select proyectoerp.erp_addproduccion($1,$2)", [
      idprodu,  
      nomprod,
      codprod,
    ]);

    res.status(200).json({
      message: "REGISTRO INSERTADO CORRECTAMENTE",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error,
    });
  }
};

produccion.updproduccion = async (req, res) => {
  const idprodu = req.params.p1;
  const nomprod = req.params.p2;
  const codprod = req.params.p3;
  try {
    await pool.query("select proyectoerp.erp_updproduccion($1,$2,$3)", [
      idprodu,
      nomprod,
      codprod
    ]);

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

produccion.offproduccion = async (req, res) => {
  const idprodu = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offproduccion($1)", [
      idprodu
    ]);

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

produccion.onproduccion = async (req, res) => {
  const idprodu = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onproduccion($1)", [
      idprodu
    ]);

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


module.exports = produccion;
