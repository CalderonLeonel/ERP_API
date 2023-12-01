import pool from "../database/Keys";
const conta = {};

//#region Cuentas Contables
conta.listarcuentas = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarcuentas()")
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

conta.listarcuentasinh = async (req, res) => {
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

conta.addcuenta = async (req, res) => {
  const numcu = req.params.p1;
  const nom = req.params.p2;
  const descr = req.params.p3;
  const tipoc = req.params.p4;

  try {
    await pool.query("select proyectoerp.erp_addcuenta($1,$2,$3,$4)", [
      numcu,
      nom,
      descr,
      tipoc,
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

conta.updcuenta = async (req, res) => {
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

conta.offcuenta = async (req, res) => {
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

conta.oncuenta = async (req, res) => {
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

conta.aumentarsaldo = async (req, res) => {
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

conta.reducirsaldo = async (req, res) => {
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

//#region 

module.exports = conta;
