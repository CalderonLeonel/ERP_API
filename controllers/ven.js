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

ventas.listardetalle = async (req, res) => {
  const idven = req.params.p1;
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listardetalleventa($1)", [
        idven,
      ])
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

ventas.ultimaventa = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_ultima_venta()")
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

ventas.addventa = async (req, res) => {
  const totven = req.params.p1;
  const codctrl = req.params.p2; 
  const nitcli = req.params.p3;
  const razsoc = req.params.p4 
  const idcli = req.params.p5 
  const idempl = req.params.p6 

  console.log("Valores de req.params:", totven, codctrl, nitcli, razsoc, idcli, idempl);

  try {

    await pool.query("BEGIN");

    await pool.query(
      "select proyectoerp.erp_registrarventa($1,$2,$3,$4,$5,$6)",
      [totven, codctrl, nitcli, razsoc, idcli, idempl]
    );

    await pool.query("COMMIT");
    res.status(200).json({
      message: "REGISTRO INSERTADO CORRECTAMENTE",
    });
  } catch (error) {
    await pool.query("ROLLBACK");
    res.status(500).json({
      message:
        "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
      error,
    });
  }
};

ventas.addventacarrito = async (req, res) => {
  const { idProducto, cantidad, precioUnitario } = req.body;
  console.log(req.body)

  try {
    await pool.query("BEGIN");

    // Llamar al procedimiento almacenado para insertar en la tabla venta_producto
    await pool.query("SELECT proyectoerp.erp_registrar_venta_producto($1, $2, $3)", [
      idProducto,
      cantidad,
      precioUnitario
    ]);

    await pool.query("COMMIT");

    res.status(200).json({
      message:
        "VENTA REALIZADA CON EXITO",
    });
  } catch (error) {
    await pool.query("ROLLBACK");
    res.status(500).json({
      message:
        "ERROR AL REALIZAR LA VENTA, PONGASE EN CONTACTO CON SISTEMAS",
      error,
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
  const idven = req.params.p1;
  const moti = req.params.p2;
  try {
    await pool.query("select proyectoerp.erp_offventa($1, $2)", [idven, moti]);

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
