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
    await pool.query(
      "select proyectoerp.erp_addcuentacontable($1,$2,$3,$4,$5)",
      [numcu, nom, des, tipoc, sald]
    );

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
  const mont = req.params.p2;

  try {
    await pool.query(
      "select proyectoerp.erp_aumentarsaldocuentacontable($1,$2)",
      [idcue, mont]
    );

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
  const mont = req.params.p2;

  try {
    await pool.query("select proyectoerp.erp_reducirsaldocuentacontable($1,$2)", [
      idcue,
      mont,
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
//#endregion

//#region Asientos Contables

contabilidad.listarasientoscontables = async (req, res) => {
  try {
    const resultado = await (
      await pool.query(
        "select * from proyectoerp.erp_listarasientoscontables()"
      )
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

contabilidad.listarasientoscontablesxfechas = async (req, res) => {
  const fechini = req.params.p1;
  const fechfin = req.params.p2;

  try {
    const resultado = await (
      await pool.query(
        "select * from proyectoerp.erp_listarasientoscontablesxfechas($1,$2)",
        [fechini, fechfin]
      )
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

contabilidad.listarasientoscontablesxcuenta = async (req, res) => {
  const tipocue = req.params.p1;

  try {
    const resultado = await (
      await pool.query(
        "select * from proyectoerp.erp_listarasientoscontablesxcuenta($1)",
        [tipocue]
      )
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

contabilidad.listarasientoscontablesinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query(
        "select * from proyectoerp.erp_listarasientoscontablesinh()"
      )
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

contabilidad.addasiento = async (req, res) => {
  // Dividir los parámetros recibidos
  const [numref, des, idcuen, mondeb, moncre, monasi] = req.params.params.split(",");


  try {
    await pool.query("select proyectoerp.erp_addasientocontable($1,$2,$3,$4,$5,$6)", [
      numref,
      des,
      idcuen,
      mondeb,
      moncre,
      monasi,
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

contabilidad.updasiento = async (req, res) => {
  const idcue = req.params.p1;
  const numcu = req.params.p2;
  const nom = req.params.p3;
  const descr = req.params.p4;
  const tipoc = req.params.p5;

  try {
    await pool.query("select proyectoerp.erp_editarasiento($1,$2,$3,$4,$5)", [
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

contabilidad.offasiento = async (req, res) => {
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

contabilidad.onasiento = async (req, res) => {
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

//#endregion

module.exports = contabilidad;
