import pool from "../database/Keys";
const departamentos = {};

departamentos.listardepartamentos = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listardepartamentos()")
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

departamentos.listardepartamentosinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listardepartamentosinh()")
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

departamentos.adddepartamento = async (req, res) => {
  const nomdepa = req.params.p1;
  const sald = req.params.p2;

  try {
    await pool.query("select proyectoerp.erp_adddepartamento($1,$2)", [
      nomcli,
      pat,
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

departamentos.upddepartamento = async (req, res) => {
  const idcli = req.params.p1;
  const nomcli = req.params.p2;
  const pat = req.params.p3;
  const mat = req.params.p4;
  const nit = req.params.p5;
  const corr = req.params.p6;
  const cel = req.params.p7;
  const tel = req.params.p8;
  try {
    await pool.query(
      "select proyectoerp.erp_editardepartamento($1,$2,$3,$4,$5,$6,$7,$8)",
      [idcli, nomcli, pat, mat, nit, corr, cel, tel]
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

departamentos.offdepartamento = async (req, res) => {
  const idcli = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offdepartamento($1)", [idcli]);

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

departamentos.ondepartamento = async (req, res) => {
  const idcli = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_ondepartamento($1)", [idcli]);

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

departamentos.addfinanciamiento = async (req, res) => {
  const iddep = req.params.p1;
  const mont = req.params.p2;
  const tip = req.params.p3;

  try {
    await pool.query(
      "select proyectoerp.erp_registrar_financiamiento($1,$2,$3)",
      [iddep, mont, tip]
    );

    res.status(200).json({
      message: "REGISTRO INSERTADO CORRECTAMENTE",
    });
  } catch (error) {
    console.error("Error en la función addfinanciamiento:", error); // Imprime el error en la consola
    res.status(500).json({
      message:
        "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error,
    });
  }
};

departamentos.listarfinanciamientos = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarfinanciamientos()")
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

module.exports = departamentos;
