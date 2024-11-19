import pool from "../database/Keys";
const ventas = {};

ventas.listarventas = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarventas()")
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

ventas.listardetalleventa = async (req, res) => {
  try {
    const id_venta = req.params.p1;
    const resultado = await(await pool.query("select * from proyectoerp.erp_listardetalleventa($1)",[id_venta])).rows;

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

ventas.listarventasinh = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarventasinh()")
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

ventas.registrarventa = async (req, res) => {
  const ventas = Array.isArray(req.body) ? req.body : [];  // Esperas recibir un array de ventas

  try {
    // Itera sobre cada venta y ejecuta la consulta para registrarla en la base de datos
    for (const venta of ventas) {
      const {
        idProducto,
        cantidad,
        precioUnitario,
        total,
        codigoControl,
        nit,
        razonSocial,
        idCliente,
        idEmpleado,
      } = venta;

      await pool.query(
        "select proyectoerp.erp_registrarventas($1,$2,$3,$4,$5,$6,$7,$8,$9)",
        [
          idProducto,
          cantidad,
          precioUnitario,
          total,
          codigoControl,
          nit,
          razonSocial,
          idCliente,
          idEmpleado,
        ]
      );
    }

    res.status(200).json({
      message: "VENTAS REALIZADAS CORRECTAMENTE",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "ERROR INESPERADO. REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error: error.message,
    });
  }
};

ventas.editarventa = async (req, res) => {
  const idlin = req.params.p1;
  const nomprod = req.params.p2;
  const codprod = req.params.p3;
  try {
    await pool.query("select proyectoerp.erp_editarventa($1,$2,$3)", [
      idlin,
      nomprod,
      codprod,
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

ventas.offventa = async (req, res) => {
  const idlin = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_offventa($1)", [idlin]);

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

ventas.onventa = async (req, res) => {
  const idlin = req.params.p1;
  try {
    await pool.query("select proyectoerp.erp_onventa($1)", [idlin]);

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

module.exports = ventas;
