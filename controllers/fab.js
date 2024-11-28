import pool from "../database/Keys";
const fabricas = {};

fabricas.listarfabricas = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarfabricas()")
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
    console.log("ERROR: "+error.message);
  }
};

fabricas.listarfabricasinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarfabricasinh()")
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
    console.log("ERROR: "+error.message);
  }
};

fabricas.addfabrica = async (req, res) => {
  const nomfab = req.params.p1;
  const codfab = req.params.p2;
  const dirfab = req.params.p3;
  const idpai = req.params.p4;
  const idciu = req.params.p5;
  const iduni = req.params.p6;

  try {
    await pool.query("select proyectoerp.erp_addfabrica($1,$2,$3,$4,$5,$6)", [
      nomfab,
      codfab,
      dirfab,
      idciu,
      idpai
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
    console.log("ERROR: "+error.message);
  }
};

fabricas.updfabrica = async (req, res) => {
  const idfab = req.params.p1;
  const nomfab = req.params.p2;
  const codfab = req.params.p3;
  const dirfab = req.params.p4;
  const idciu = req.params.p5;
  const idpai = req.params.p6;
  const iduni = req.params.p7;

  try {
    await pool.query("select proyectoerp.erp_editarfabrica($1,$2,$3,$4,$5,$6,$7)", [
      idfab,
      nomfab,
      codfab,
      dirfab,
      idciu,
      idpai,
      iduni
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

fabricas.offfabrica = async (req, res) => {
  const idfab = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offfabrica($1)", [idfab]);

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

fabricas.onfabrica = async (req, res) => {
  const idfab = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onfabrica($1)", [idfab]);

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

module.exports = fabricas;
