import pool from "../database/Keys";
const materias = {};

materias.listarmateriasp = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarmateriasp()")
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

materias.listarmateriaspinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarmateriasinh()")
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

materias.addmateria = async (req, res) => {
  const nommat = req.params.p1;
  const des = req.params.p2;
  const cant = req.params.p3;
  const med = req.params.p4;
  const idprov = req.params.p5;

  try {
    await pool.query("select proyectoerp.erp_addmateriaprima($1,$2,$3,$4,$5)", [
      nommat,
      des,
      cant,
      med,
      idprov
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

materias.updmateria = async (req, res) => {
    const idmat = req.params.p1
    const nommat = req.params.p2;
    const des = req.params.p3;
    const cant = req.params.p4;
    const med = req.params.p5;
    const idprov = req.params.p6;
  try {
    await pool.query("select proyectoerp.erp_updmateria($1,$2,$3,$4,$5,$6)", [
        idmat,
        nommat,
        des,
        cant,
        med,
        idprov
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

materias.offmateria = async (req, res) => {
  const idlin = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offmateria($1)", [idlin]);

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

materias.onmateria = async (req, res) => {
  const idlin = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onmateria($1)", [idlin]);

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

module.exports = materias;
