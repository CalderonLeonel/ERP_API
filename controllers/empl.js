import pool from "../database/Keys";
const empleados = {};

empleados.listarempleados = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarempleados()")
    ).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "No hay empleados registrados",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
    console.log("ERROR: " + error.message);
  }
};

empleados.listarempleadossinc = async (req, res) => {
  try {
    const resultado = await (
      await pool.query("select * from proyectoerp.erp_listarempleadossinc()")
    ).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "No hay empleados registrados",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
    console.log("ERROR: " + error.message);
  }
};

empleados.addempleado = async (req, res) => {
  const nom = req.body.p1;
  const pat = req.body.p2;
  const mat = req.body.p3;
  const ism = req.body.p4;
  const est = req.body.p5;
  const emal = req.body.p6;
  const nacDte = req.body.p7;
  const ci = req.body.p8;
  const tel = req.body.p9;
  const idcarg = req.body.p10;
  const iddep = req.body.p11;
  const idsect = req.body.p12;
  try {
    await pool.query("select proyectoerp.erp_addempleado($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)", [nom, pat, mat, ism, est, emal, nacDte, ci, tel, idcarg, iddep, idsect]);

    res.status(200).json({
      message: 'Se ha registrado el empleado con éxito.'
    })

  } catch (error) {
    res.status(500).json({
      message: 'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
      error
    })
    console.log("ERROR: " + error.message);
  }

};
empleados.addempleadosinmaterno = async (req, res) => {
  const nom = req.body.p1;
  const pat = req.body.p2;
  const ism = req.body.p3;
  const est = req.body.p4;
  const emal = req.body.p5;
  const nacDte = req.body.p6;
  const ci = req.body.p7;
  const tel = req.body.p8;
  const idcarg = req.body.p9;
  const iddep = req.body.p10;
  const idsect = req.body.p11;
  try {
    await pool.query("select proyectoerp.erp_addempleadosinmaterno($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", [nom, pat, ism, est, emal, nacDte, ci, tel, idcarg, iddep, idsect]);

    res.status(200).json({
      message: 'Se ha registrado el empleado con éxito.'
    })

  } catch (error) {
    res.status(500).json({
      message: 'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
      error
    })
    console.log("ERROR: " + error.message);
  }

};

empleados.editarempleado = async (req, res) => {
  const idempl = req.body.p1;
  const nom = req.body.p2;
  const pat = req.body.p3;
  const mat = req.body.p4;
  const ism = req.body.p5;
  const est = req.body.p6;
  const emal = req.body.p7;
  const nacDte = req.body.p8;
  const ci = req.body.p9;
  const tel = req.body.p10;
  const idcarg = req.body.p11;
  const iddep = req.body.p12;
  const idsect = req.body.p13

  try {
    await pool.query("select proyectoerp.erp_editarempleado($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)", [idempl, nom, pat, mat, ism, est, emal, nacDte, ci, tel, idcarg, iddep, idsect]);

    res.status(200).json({
      message: 'Se ha editado el empleado con éxito.'
    });
  } catch (error) {
    res.status(500).json({
      message: 'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
      error: error.message
    });
    console.log("ERROR: " + error.message);
  }
};
  empleados.listarempleadosactivos = async (req, res) => {
    try {
      const resultado = await (
        await pool.query(
          "select * from proyectoerp.erp_listar_empleados_activos()"
        )
      ).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "No hay empleados registrados",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  empleados.editarempleado = async (req, res) => {
    const idempl = req.body.p1;
    const nom = req.body.p2;
    const pat = req.body.p3;
    const mat = req.body.p4;
    const ism = req.body.p5;
    const est = req.body.p6;
    const emal = req.body.p7;
    const nacDte = req.body.p8;
    const ci = req.body.p9;
    const tel = req.body.p10;
    const idcarg = req.body.p11;
    const iddep = req.body.p12;

    try {
      await pool.query(
        "select proyectoerp.erp_editarempleado($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
        [idempl, nom, pat, mat, ism, est, emal, nacDte, ci, tel, idcarg, iddep]
      );

      res.status(200).json({
        message: "Se ha editado el empleado con éxito.",
      });
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error: error.message,
      });
      console.log("ERROR: " + error.message);
    }
  };

  
  empleados.subirfoto = async (req, res) => {
    const idempl = req.params.p1;  
    const url = req.params.p2;  

    try {
        await pool.query("select proyectoerp.erp_subirfoto($1,$2)", [idempl, url]);

        res.status(200).json({
            message: "Se guardo la foto con éxito.",
        });
    } catch (error) {
        res.status(500).json({
            message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
            error: error.message,
        });
        console.log("ERROR: " + error.message);
    }
};


  empleados.getempleado = async (req, res) => {
    const idempl = req.params.p1;
    try {
      const resultado = await (
        await pool.query("select * from proyectoerp.erp_get_empleado($1)", [
          idempl,
        ])
      ).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "El empleado no existe.",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  empleados.offempleado = async (req, res) => {
    const idempl = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offempleado($1)", [idempl]);

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

  empleados.onempleado = async (req, res) => {
    const idempl = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onempleado($1)", [idempl]);

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

  //alertas
  empleados.listaralertas = async (req, res) => {
    try {
      const resultado = await (
        await pool.query("select * from proyectoerp.erp_listar_alerta()")
      ).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "No hay alertas registradas",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  empleados.crearalertas = async (req, res) => {
    const { titulo, descripcion, img } = req.body;
    try {
      await pool.query("select proyectoerp.erp_addalerta($1,$2,$3)", [
        titulo,
        descripcion,
        img,
      ]);

      res.status(200).json({
        message: "Se ha registrado la alerta con éxito.",
      });
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  empleados.editaralertas = async (req, res) => {
    const idalerta = req.params.p1;
    const titulo = req.params.p2;
    const descripcion = req.params.p3;
    try {
      await pool.query("select proyectoerp.erp_editalerta($1,$2,$3,$4)", [
        idalerta,
        titulo,
        descripcion,
      ]);

      res.status(200).json({
        message: "Se ha registrado la alerta con éxito.",
      });
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  empleados.offalerta = async (req, res) => {
    const idalerta = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offalerta($1)", [idalerta]);

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

  /**
   * Pago Planillas
   */

  empleados.generarPlanilla = async (req, res) => {
    try {
      const resultado = await (
        await pool.query("select * from proyectoerp.erp_generar_planilla_pago()")
      ).rows;

      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "No hay empleados activos para generar planilla",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  empleados.pagarplanilla = async (req, res) => {
    // Dividimos el parámetro recibido por la coma
    const [idCuentaContable, montoTotal] = req.params.params.split(",");

    try {
      // Iniciar la transacción
      await pool.query("BEGIN");

      // Reducir el saldo de la cuenta contable
      await pool.query(
        "SELECT proyectoerp.erp_reducirsaldocuentacontable($1, $2)",
        [idCuentaContable, montoTotal]
      );

      // Aquí podrías agregar cualquier otra lógica de actualización

      // Confirmar la transacción
      await pool.query("COMMIT");

      res.status(200).json({
        message: "Planilla pagada y saldo reducido correctamente",
      });
    } catch (error) {
      // Revertir la transacción en caso de error
      await pool.query("ROLLBACK");
      res.status(500).json({
        message:
          "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  // Listar todos los pagos
  empleados.listarPagos = async (req, res) => {
    try {
      const resultado = await (
        await pool.query("SELECT * FROM proyectoerp.pagos")
      ).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "No hay pagos registrados",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  // Añadir un nuevo pago
  empleados.addPago = async (req, res) => {
    // Dividir los parámetros recibidos
    const [idempl, idcar, mon, descr] = req.params.params.split(",");

    try {
      // Iniciar la transacción
      await pool.query("BEGIN");

      await pool.query("SELECT proyectoerp.erp_addpago($1, $2, $3, $4)", [
        idempl,
        idcar,
        mon,
        descr,
      ]);

      // Confirmar la transacción
      await pool.query("COMMIT");

      res.status(200).json({
        message: "Pago registrado con éxito.",
      });
    } catch (error) {
      // Revertir la transacción en caso de error
      await pool.query("ROLLBACK");
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  // Editar un pago
  empleados.editarPago = async (req, res) => {
    const { id_pago, id_empleado, id_cargo, monto, descripcion } = req.body;
    try {
      // Iniciar la transacción
      await pool.query("BEGIN");

      await pool.query(
        "UPDATE proyectoerp.pagos SET id_empleado = $1, id_cargo = $2, monto = $3, descripcion = $4, last_update = CURRENT_TIMESTAMP WHERE id_pago = $5",
        [id_empleado, id_cargo, monto, descripcion, id_pago]
      );

      // Confirmar la transacción
      await pool.query("COMMIT");

      res.status(200).json({
        message: "Pago editado con éxito.",
      });
    } catch (error) {
      // Revertir la transacción en caso de error
      await pool.query("ROLLBACK");
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  // Eliminar un pago
  empleados.eliminarPago = async (req, res) => {
    const { id_pago } = req.params;
    try {
      await pool.query("DELETE FROM proyectoerp.pagos WHERE id_pago = $1", [
        id_pago,
      ]);

      res.status(200).json({
        message: "Pago eliminado con éxito.",
      });
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
      console.log("ERROR: " + error.message);
    }
  };

  module.exports = empleados;