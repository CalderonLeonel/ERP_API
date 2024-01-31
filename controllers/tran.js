import pool from "../database/Keys";
const transportes = {};

transportes.listartransportes = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listartransportes()")
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

transportes.listartransportesinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listartransportesinh()")
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

transportes.addchofer = async (req, res) => {
  const nomchof = req.params.p1;
  const codtipo = req.params.p2;
  const idlin = req.params.p3;
  try {
    await pool.query("select proyectoerp.erp_addtipoproducto($1,$2,$3)", [
      nomtipo,
      codtipo,
      idlin,
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

transportes.updchofer = async (req, res) => {
  const idtipo = req.params.p1;
  const nomtipo = req.params.p2;
  const codtipo = req.params.p3;
  const idlin = req.params.p4;
  try {
    await pool.query("select * from proyectoerp.erp_editartipo($1,$2,$3,$4)", [
      idtipo,
      nomtipo,
      codtipo,
      idlin,
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

transportes.offchofer = async (req, res) => {
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

transportes.onchofer = async (req, res) => {
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

transportes.actChoferImg = async (req, res) => {
  const unicod = req.params.p1;

  try {
    await pool.query("select unicen.seiko_upddocenteimg($1)", [unicod]);
    const result = await pool.query(
      "SELECT foto FROM unicen.personal WHERE unicodigo = $1",
      [unicod]
    );
    const imgUrl = result.rows[0].img_url;

    res.status(200).json({
      message: "SE GUARDARON LOS CAMBIOS ACT IMG!!!",
      imgUrl: imgUrl,
    });
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
    });
  }
};

transportes.updFotoUrl = async (req, res) => {
  const unicod = req.params.p1;

  try {
    const resultado = await pool.query("select unicen.seiko_updfotourl($1)", [
      unicod,
    ]);
    res.status(200).json({
      resultado,
    });
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
    });
  }
};

module.exports = transportes;
