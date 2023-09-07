import pool from "../database/Keys";
const inventario = {};


//Transaccion_Inventario
inventario.listarTransacciones = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_transaccion_inventario()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};

inventario.listarTransaccionesActivas = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_transaccion_inventario_activo()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};

inventario.listarTransaccionesInactivas = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_transaccion_inventario_inactivo()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};


inventario.agregarTransaccion = async (req, res) => {

  const idItem = req.params.p1;
  const movimiento = req.params.p2;
  const cantidad  = req.params.p3;
  const costounitario  = req.params.p4;
  const metodovaluacion  = req.params.p5;
  const est  = req.params.p6;
  try {
    await pool.query("select proyectoerp.erp_insertar_transaccion_inventario($1,$2,$3,$4,$5,$6)",[idItem,movimiento,cantidad,costounitario,metodovaluacion,est]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
  }


};

inventario.actualizarTransaccion = async (req, res) => {
  const id = req.params.p1;
  const idItem = req.params.p2;
  const movimiento = req.params.p3;
  const cantidad  = req.params.p4;
  const costounitario  = req.params.p5;
  const metodovaluacion  = req.params.p6;
  const est  = req.params.p7;
  try {
    await pool.query("select proyectoerp.erp_actualizar_transaccion_inventario($1,$2,$3,$4,$5,$6,$7)",[id,idItem,movimiento,cantidad,costounitario,metodovaluacion,est]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
  }


};


inventario.anularTransaccion = async (req, res) => {
  const id = req.params.p1;

  try {
    await pool.query("select proyectoerp.erp_eliminar_transaccion_inventario($1)",[id]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
  }


};


//Item

inventario.listarItem = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_item()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};


inventario.listarItemActivo = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_item_activo()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};

inventario.listarItemInactivo = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_item_inactivo()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};


inventario.agregarItem = async (req, res) => {

  const nombre = req.params.p1;
  const descripcion = req.params.p2;
  const medida  = req.params.p3;
  const est  = req.params.p4;
  const tipo  = req.params.p5;
  try {
    await pool.query("select proyectoerp.erp_insertar_item($1,$2,$3,$4,$5)",[nombre,descripcion,medida,est,tipo]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
  }


};


inventario.actualizarItem = async (req, res) => {
  const id = req.params.p1;
  const nombre = req.params.p2;
  const descripcion = req.params.p3;
  const medida  = req.params.p4;
  const est  = req.params.p5;
  const tipo  = req.params.p6;
  try {
    await pool.query("select proyectoerp.erp_actualizar_item($1,$2,$3,$4,$5,$6)",[id,nombre,descripcion,medida,est,tipo]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      })
  }


};

inventario.eliminarItem = async(req,res) =>{
  const id = req.params.p1;


   try {
         await pool.query("select proyectoerp.erp_eliminar_item($1)",[id]);
                           
             res.status(200).json({
                 message:'ESTADO CAMBIADO CORRECTAMENTE'
           
             })
         
                    
     } catch (error) {
         res.status(500).json({
             message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
             error
         })
     }
 
 };

//Tipo De Item

inventario.listarTipoItem = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_tipodeitem()")).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "NO EXISTEN DATOS:(",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
    }
  };

  inventario.listarTipoItemActivo = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_tipodeitem_activo()")).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "NO EXISTEN DATOS:(",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
    }
  };

  inventario.listarTipoItemInactivo = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_tipodeitem_inactivo()")).rows;
      if (resultado.length > 0) {
        res.status(200).json({ resultado });
      } else {
        res.status(200).json({
          message: "NO EXISTEN DATOS:(",
          NotFount: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
        error,
      });
    }
  };

  

  inventario.agregarTipoItem = async (req, res) => {

    const nombre = req.params.p1;
    const est  = req.params.p2;
    try {
      await pool.query("select proyectoerp.erp_insertar_tipodeitem($1,$2)",[nombre,est]);
                        
          res.status(200).json({
              message:'CAMPO GUARDADO CORRECTAMENTE :)'
        
          })           
    } catch (error) {
        res.status(500).json({
            message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error
        })
    }
  
  
  };


  
  inventario.actualizarTipoItem = async (req, res) => {
    const id = req.params.p1;
    const nombre = req.params.p2;
    const est  = req.params.p3;
    try {
      await pool.query("select proyectoerp.erp_actualizar_tipodeitem($1,$2,$3)",[id,nombre,est]);
                        
          res.status(200).json({
              message:'CAMPO GUARDADO CORRECTAMENTE :)'
        
          })           
    } catch (error) {
        res.status(500).json({
            message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error
        })
    }
  
  
  };

  inventario.eliminarTipoItem = async(req,res) =>{
    const id = req.params.p1;
  
  
     try {
           await pool.query("select proyectoerp.erp_eliminar_tipodeitem($1)",[id]);
                             
               res.status(200).json({
                   message:'ESTADO CAMBIADO CORRECTAMENTE'
             
               })
           
                      
       } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };



module.exports = inventario;