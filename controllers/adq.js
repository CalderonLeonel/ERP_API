import pool from "../database/Keys";
const adquisicion = {};

//cotizacionAdquisicion

adquisicion.listarcotizacionadquisicion = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_cotizacion_adquisicion()")).rows;
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

adquisicion.listarCotizacionAdquisicionActiva = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_cotizacion_adquisicion_activo()")).rows;
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

adquisicion.listarCotizacionAdquisicionAnulada = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_cotizacion_adquisicion_anulada()")).rows;
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


adquisicion.agregarcotizacionadquisicion  = async(req,res) =>{
  const id_usuario = req.params.p1;
  const id_proveedor = req.params.p2;
  const nombreCotizacion= req.params.p3;
  const est  = req.params.p4;
  
  
   try {
         await pool.query("select proyectoerp.erp_insertar_cotizacion_adquisicion($1,$2,$3,$4)",[id_usuario,id_proveedor,nombreCotizacion,est]);
                           
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

 adquisicion.actualizarcotizacionadquisicion  = async(req,res) =>{
  const id = req.params.p1;
  const id_usuario = req.params.p2;
  const id_proveedor = req.params.p3;
  const nombreCotizacion= req.params.p4;
  const est  = req.params.p5;
  
  
  
   try {
         await pool.query("select proyectoerp.erp_actualizar_cotizacion_adquisicion($1,$2,$3,$4,$5)",[id,id_usuario,id_proveedor,nombreCotizacion,est]);
                           
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

 
 adquisicion.eliminarcotizacionadquisicion = async(req,res) =>{
  const id = req.params.p1;


   try {
         await pool.query("select proyectoerp.erp_eliminar_cotizacion_adquisicion($1)",[id]);
                           
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


//cotizacionitem

adquisicion.listarcotizacionitem = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_cotizacion_item()")).rows;
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

adquisicion.listarCotizacionItemActivo = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_cotizacion_item_activo()")).rows;
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

adquisicion.listarCotizacionItemAnulada = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_cotizacion_item_anulada()")).rows;
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


adquisicion.agregarcotizacionitem  = async(req,res) =>{
  const id_cotizacion = req.params.p1;
  const id_item = req.params.p2;
  const precioUnitario= req.params.p3;
  const est  = req.params.p4;
  
  
   try {
         await pool.query("select proyectoerp.erp_insertar_cotizacion_item($1,$2,$3,$4)",[id_cotizacion,id_item,precioUnitario,est]);
                           
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

 adquisicion.actualizarcotizacionitem  = async(req,res) =>{
  const id = req.params.p1;
  const id_cotizacion = req.params.p2;
  const id_item = req.params.p3;
  const precioUnitario= req.params.p4;
  const est  = req.params.p5;
  
  
  
  
   try {
      await pool.query("SELECT proyectoerp.erp_actualizar_cotizacion_item($1, $2, $3, $4, $5)",[id, id_cotizacion, id_item, precioUnitario, est]);                
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


 adquisicion.eliminarcotizacionitem = async(req,res) =>{
  const id = req.params.p1;


   try {
         await pool.query("select proyectoerp.erp_eliminar_cotizacion_item($1)",[id]);
                           
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


module.exports = adquisicion;