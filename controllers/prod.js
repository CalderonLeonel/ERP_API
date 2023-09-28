import pool from "../database/Keys";
const productos = {};

productos.listarproductos = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarproductos()")
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
    });
  }
};

productos.listarproductosinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarproductosinh()")
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

productos.addproducto = async (req, res) => {
  const nomprod = req.params.p1;
  const codprod = req.params.p2;
  const idtipo = req.params.p3;
  const idforma = req.params.p4;
  const idfab = req.params.p5;
  try {
    await pool.query("select proyectoerp.erp_addproducto($1,$2,$3,$4,$5)", [
      nomprod,
      codprod,
      idtipo,
      idforma,
      idfab,
    ]);

    res.status(200).json({
      message: "SE GUARDARON LOS CAMBIOS!!!",
    });
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};

productos.updproducto = async (req, res) => {
  const idprod = req.params.p1;
  const nomprod = req.params.p2;
  const codprod = req.params.p3;
  try {
    await pool.query("select proyectoerp.erp_updproducto($1,$2,$3)", [
      idprod,
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

productos.offproducto = async (req, res) => {
  const idprod = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offproducto($1)", [idprod]);

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

productos.onproducto = async (req, res) => {
  const idprod = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onproducto($1)", [idprod]);

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

module.exports = productos;
