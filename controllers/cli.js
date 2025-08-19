import pool from "../database/Keys";
const clientes = {};

clientes.listarclientes = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarclientes()")
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

clientes.listarclientesinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarclientesinh()")
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

clientes.addcliente = async (req, res) => {
  const nomcli = req.params.p1;
  const pat = req.params.p2;
  const mat = req.params.p3;
  const nit = req.params.p4;
  const fech = req.params.p5;
  const corr = req.params.p6;
  const cel = req.params.p7;
  const tel = req.params.p8;

  try {
    await pool.query(
      "select proyectoerp.erp_addcliente($1,$2,$3,$4,$5,$6,$7,$8)",
      [nomcli, pat, mat, nit, fech, corr, cel, tel]
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

clientes.updcliente = async (req, res) => {
  const idcli = req.params.p1;
  const nomcli = req.params.p2;
  const pat = req.params.p3;
  const mat = req.params.p4;
  const nit = req.params.p5;
  const corr = req.params.p6;
  const cel = req.params.p7;
  const tel = req.params.p8;
  try {
    await pool.query("select proyectoerp.erp_editarcliente($1,$2,$3,$4,$5,$6,$7,$8)", [
      idcli,
      nomcli,
      pat,
      mat,
      nit,
      corr,
      cel,
      tel
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

clientes.offcliente = async (req, res) => {
  const idcli = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offcliente($1)", [idcli]);

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

clientes.oncliente = async (req, res) => {
  const idcli = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_oncliente($1)", [idcli]);

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

module.exports = clientes;
