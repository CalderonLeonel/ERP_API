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

inventario.listarTransaccionesReportes = async (req, res) => {
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

inventario.listarStockAlmacen = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_stock_almacen()")).rows;
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

inventario.listarStock = async (req, res) => {
  const id_almacen = req.params.p1;
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_stock($1)",[id_almacen])).rows;
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

inventario.listarProductos = async (req, res) => {
  const id_almacen = req.params.p1;
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_almacenamiento_productos($1)",[id_almacen])).rows;
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
  const idAlmacen = req.params.p2;
  const movimiento = req.params.p3;
  const cantidad  = req.params.p4;
  const est  = req.params.p5;
  const referencia = req.params.p6;
  const motivo = req.params.p7;
  const lote = req.params.p8;
  try {
    await pool.query("select proyectoerp.erp_insertar_transaccion_inventario($1,$2,$3,$4,$5,$6,$7,$8)",[idItem,idAlmacen,movimiento,cantidad,referencia,motivo,lote,est]);
                      
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

inventario.agregarTransaccionSalida = async (req, res) => {

  const idItem = req.params.p1;
  const movimiento = req.params.p2;
  const cantidad  = req.params.p3;
  const metodovaluacion  = req.params.p4;
  const est  = req.params.p5;
  const referencia = req.params.p6;
  const motivo = req.params.p7;
  const lote = req.params.p8;
  try {
    await pool.query("select proyectoerp.erp_salida_inventario($1,$2,$3,$4,$5,$6,$7,$8)",[idItem,movimiento,cantidad,metodovaluacion,est,referencia,motivo,lote]);
                      
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
  const idAlmacen = req.params.p3;
  const movimiento = req.params.p4;
  const cantidad  = req.params.p5;
  const est  = req.params.p6;
  try {
    await pool.query("select proyectoerp.erp_actualizar_transaccion_inventario($1,$2,$3,$4,$5,$6)",[id,idItem,idAlmacen,movimiento,cantidad,est]);
                      
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

inventario.listarItemActivoInventario = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_item_activo_inventario()")).rows;
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

inventario.listarItemActivoInventarioTransaccion = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_item_activo_inventario_transaccion()")).rows;
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


inventario.listarItemAlmacenado = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_stock_item_total()")).rows;
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
  const categoria  = req.params.p5;
  const limite  = req.params.p6;
  const metodovaluacion  = req.params.p7;
  const sku  = req.params.p8;
  const proveedor  = req.params.p9;
  const fecha  = req.params.p10;
  const costo  = req.params.p11;
  try {
    await pool.query("select proyectoerp.erp_insertar_item($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[nombre,descripcion,medida,est,categoria,limite,metodovaluacion,sku,proveedor,fecha,costo]);
                      
        res.status(200).json({
            message:'CAMPO GUARDADO CORRECTAMENTE :)'
      
        })           
  } catch (error) {
      res.status(500).json({
          message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
          error
      });
      console.log("ERROR: "+error);
  }


};

inventario.agregarPrecioItem = async (req, res) => {

  const iditem = req.params.p1;
  const precio = req.params.p2;
  try {
    await pool.query("select proyectoerp.erp_insertar_precio_item($1,$2)",[iditem,precio]);
                      
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
  const categoria  = req.params.p6;
  const limite  = req.params.p7;
  const metodovaluacion  = req.params.p8;
  const sku  = req.params.p9;
  const proveedor  = req.params.p10;
  const fecha  = req.params.p11;
  const costo  = req.params.p12;
  try {
    await pool.query("select proyectoerp.erp_actualizar_item($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[id,nombre,descripcion,medida,est,categoria,limite,metodovaluacion,sku,proveedor,fecha,costo]);
                      
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

inventario.listarCategoria = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_categoria()")).rows;
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

  inventario.listarCategoriaActivo = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_categoria_activo()")).rows;
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

  inventario.listarCategoriaInactivo = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_categoria_inactivo()")).rows;
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

  

  inventario.agregarCategoria = async (req, res) => {

    const nombre = req.params.p1;
    const est  = req.params.p2;
    try {
      await pool.query("select proyectoerp.erp_insertar_categoria($1,$2)",[nombre,est]);
                        
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


  
  inventario.actualizarCategoria = async (req, res) => {
    const id = req.params.p1;
    const nombre = req.params.p2;
    const est  = req.params.p3;
    try {
      await pool.query("select proyectoerp.erp_actualizar_categoria($1,$2,$3)",[id,nombre,est]);
                        
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

  inventario.eliminarCategoria = async(req,res) =>{
    const id = req.params.p1;
  
  
     try {
           await pool.query("select proyectoerp.erp_eliminar_categoria($1)",[id]);
                             
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

   
  inventario.activarCategoria = async(req,res) =>{
    const id = req.params.p1;
  
  
     try {
           await pool.query("select proyectoerp.erp_activar_categoria($1)",[id]);
                             
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


   //Subcategoria


   inventario.listarSubcategoria = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_subcategoria()")).rows;
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

   inventario.listarSubcategoriaDe = async (req, res) => {
    try {
      const idCategoria = req.params.p1;
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_subcategoria_de($1)",[idCategoria])).rows;
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


  inventario.listarSubcategoriaActivo = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_subcategoria_activo()")).rows;
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

  inventario.listarSubcategoriaInactivo = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_subcategoria_inactivo()")).rows;
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


   
   inventario.agregarSubcategoria = async (req, res) => {

    const nombre = req.params.p1;
    const categoria = req.params.p2;
    const est  = req.params.p3;
    try {
      await pool.query("select proyectoerp.erp_insertar_subcategoria($1,$2,$3)",[nombre,categoria,est]);
                        
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


  
  inventario.actualizarSubcategoria = async (req, res) => {
    const id = req.params.p1;
    const nombre = req.params.p2;
    const categoria = req.params.p3;
    const est  = req.params.p4;
    try {
      await pool.query("select proyectoerp.erp_actualizar_subcategoria($1,$2,$3,$4)",[id,nombre,categoria,est]);
                        
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

  inventario.eliminarSubcategoria = async(req,res) =>{
    const id = req.params.p1;
  
  
     try {
           await pool.query("select proyectoerp.erp_eliminar_subcategoria($1)",[id]);
                             
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


   inventario.listardetallestand = async (req, res) => {
    const id_stand = req.params.p1;
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_detalle_stand($1)",[id_stand])).rows;
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



  inventario.listarExistencias = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_obtener_existencias()")).rows;
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

  //saldos

  inventario.listarSaldoAlmacenItem = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_almacenes_saldo()")).rows;
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
  
  inventario.listarSaldoItem = async (req, res) => {
    const id_almacen = req.params.p1;
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_saldo_item($1)",[id_almacen])).rows;
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



module.exports = inventario;