import pool from "../database/Keys";
const proveedor = {};

proveedor.listarproveedores = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_proveedores()")).rows;
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

proveedor.listarProveedoresActivos = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_proveedores_activos()")).rows;
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

proveedor.listarProveedoresInactivos = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_proveedores_inactivos()")).rows;
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

proveedor.agregarProveedor = async(req,res) =>{
   const { p1, p2, p3, p4, p5, p6, p7, p8, p9 } = req.params;
   try {
         await pool.query("select proyectoerp.erp_insertar_proveedor($1,$2,$3,$4,$5,$6,$7,$8,$9)",[p1, p2, p3, p4, p5, p6, p7, p8, p9]);
                           
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

proveedor.agregarProveedorArchivo = async(req,res) =>{
  const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = req.params;
   try {
         await pool.query("select proyectoerp.erp_insertar_proveedor($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]);
                           
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


 proveedor.actualizarProveedor = async(req,res) =>{
  const { p1, p2, p3, p4, p5, p6, p7, p8, p9,p10} = req.params;
  
   try {
         await pool.query("select proyectoerp.erp_actualizar_proveedor($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[p1, p2, p3, p4, p5, p6, p7, p8, p9,p10]);
                           
             res.status(200).json({
                 message:'SE GUARDARON LOS CAMBIOS :)'
           
             })
         
                    
     } catch (error) {
         res.status(500).json({
             message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
             error
         })
     }
 
 };

 proveedor.actualizarProveedorarchivo = async(req,res) =>{
  const { p1, p2, p3, p4, p5, p6, p7, p8, p9,p10,p11 } = req.params;
  
  
   try {
         await pool.query("select proyectoerp.erp_actualizar_proveedor_archivo($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[p1, p2, p3, p4, p5, p6, p7, p8, p9,p10,p11 ]);
                           
             res.status(200).json({
                 message:'SE GUARDARON LOS CAMBIOS :)'
           
             })
         
                    
     } catch (error) {
         res.status(500).json({
             message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
             error
         })
     }
 
 };


 proveedor.eliminarProveedor = async(req,res) =>{
  const id = req.params.p1;


   try {
         await pool.query("select proyectoerp.erp_eliminar_proveedor($1)",[id]);
                           
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


 //Categorias Proveedor

 
 proveedor.listarCategoria = async (req, res) => {
     try {
       const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_categoria_proveedor()")).rows;
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
 
   proveedor.listarCategoriaActivo = async (req, res) => {
     try {
       const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_categoria_proveedor_activo()")).rows;
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
 
   proveedor.listarCategoriaInactivo = async (req, res) => {
     try {
       const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_categoria_proveedor_inactivo()")).rows;
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
 
   
 
   proveedor.agregarCategoria = async (req, res) => {
 
     const nombre = req.params.p1;
     const est  = req.params.p2;
     try {
       await pool.query("select proyectoerp.erp_insertar_categoria_proveedor($1,$2)",[nombre,est]);
                         
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
 
 
   
   proveedor.actualizarCategoria = async (req, res) => {
     const id = req.params.p1;
     const nombre = req.params.p2;
     const est  = req.params.p3;
     try {
       await pool.query("select proyectoerp.erp_actualizar_categoria_proveedor($1,$2,$3)",[id,nombre,est]);
                         
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
 
   proveedor.eliminarCategoria = async(req,res) =>{
     const id = req.params.p1;
   
   
      try {
            await pool.query("select proyectoerp.erp_eliminar_categoria_proveedor($1)",[id]);
                              
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
 
    
   proveedor.activarCategoria = async(req,res) =>{
     const id = req.params.p1;
   
   
      try {
            await pool.query("select proyectoerp.erp_activar_categoria_proveedor($1)",[id]);
                              
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


module.exports = proveedor;