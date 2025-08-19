import pool from "../database/Keys";
const movimientos = {};

movimientos.listarmovimientos = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarmovimientos()")
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

movimientos.listarmovimientosinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarmovimientosinh()")
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

movimientos.addmovimiento = async (req, res) => {
  const codmov = req.params.p1;
  const idprod = req.params.p2;
  const idfab = req.params.p3;
  const idalm = req.params.p4;
  const cant = req.params.p5;


  try {
    await pool.query(
      "select proyectoerp.erp_addmovimiento($1,$2,$3,$4,$5)",
      [codmov, idprod, idfab, idalm, cant]
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

movimientos.updmovimiento = async (req, res) => {
  const idmov = req.params.p1;
  const codmov = req.params.p2;
  const idprod = req.params.p3;
  const idfab = req.params.p4;
  const idalm = req.params.p5;
  const cant = req.params.p6;

  try {
    await pool.query("select proyectoerp.erp_editarmovimiento($1,$2,$3,$4,$5,$6,$7,$8)", [
      idmov,
      codmov,
      idprod,
      idfab,
      idalm,
      cant
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

movimientos.offmovimiento = async (req, res) => {
  const idmov = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offmovimiento($1)", [idmov]);

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

movimientos.onmovimiento = async (req, res) => {
  const idmov = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onmovimiento($1)", [idmov]);

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

module.exports = movimientos;
