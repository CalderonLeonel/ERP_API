import pool from "../database/Keys";
const tipos = {};

tipos.listartipos = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listartipos()")
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

tipos.listartiposinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listartiposinh()")
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

tipos.addtipo = async (req, res) => {
  const nomtipo = req.params.p1;
  const codtipo = req.params.p2;
  const idlin = req.params.p3;
  try {
    await pool.query("select proyectoerp.erp_addtipoproducto($1,$2,$3)", [
      nomtipo,
      codtipo,
      idlin
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

tipos.updtipo = async (req, res) => {
  const idtipo = req.params.p1;
  const nomtipo = req.params.p2;
  const codtipo = req.params.p3;
  const idlin = req.params.p4;
  try {
    await pool.query("select * proyectoerp.erp_editartipo($1,$2,$3,$4)", [
      idtipo,
      nomtipo,
      codtipo,
      idlin
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

tipos.offtipo = async (req, res) => {
  const idtipo = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offtipo($1)", [idtipo]);

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

tipos.ontipo = async (req, res) => {
  const idtipo = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_ontipo($1)", [idtipo]);

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

module.exports = tipos;
