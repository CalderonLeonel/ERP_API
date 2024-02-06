import pool from "../database/Keys";
const contabilidad = {};

//#region Cuentas Contables
contabilidad.listarcuentas = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarcuentascontables()")
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

contabilidad.listarcuentasinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarcuentasinh()")
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

contabilidad.addcuenta = async (req, res) => {
  const numcu = req.params.p1;
  const nom = req.params.p2;
  const des = req.params.p3;
  const tipoc = req.params.p4;
  const sald = req.params.p5;

  try {
    await pool.query("select proyectoerp.erp_addcuentacontable($1,$2,$3,$4,$5)", [
      numcu,
      nom,
      des,
      tipoc,
      sald
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

contabilidad.updcuenta = async (req, res) => {
  const idcue = req.params.p1;
  const numcu = req.params.p2;
  const nom = req.params.p3;
  const descr = req.params.p4;
  const tipoc = req.params.p5;

  try {
    await pool.query("select proyectoerp.erp_editarcuenta($1,$2,$3,$4,$5)", [
      idcue,
      numcu,
      nom,
      descr,
      tipoc,
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

contabilidad.offcuenta = async (req, res) => {
  const idcue = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offcuenta($1)", [idcue]);

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

contabilidad.oncuenta = async (req, res) => {
  const idcue = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_oncuenta($1)", [idcue]);

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

contabilidad.aumentarsaldo = async (req, res) => {
  const idcue = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_aumentarsaldo($1)", [idcue]);

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

contabilidad.reducirsaldo = async (req, res) => {
  const idcue = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_reducirsaldo($1)", [idcue]);

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
//#endregion

module.exports = contabilidad;
