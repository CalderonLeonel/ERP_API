import pool from "../database/Keys";
const adquisicion = {};

//cotizacionAdquisicion

adquisicion.listarcotizaciondeadquisicion = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_cotizaciondeadquisicion()")).rows;
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


adquisicion.agregarcotizaciondeadquisicion  = async(req,res) =>{
  const id_usuario = req.params.p1;
  const id_proveedor = req.params.p2;
  const nombreCotizacion= req.params.p3;
  const est  = req.params.p5;
  
  
   try {
         await pool.query("select erp_produccion.erp_insertar_cotizacion_adquisicion($1,$2,$3,$4)",[id_usuario,id_proveedor,nombreCotizacion,est]);
                           
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

 adquisicion.actualizarcotizaciondeadquisicion  = async(req,res) =>{
  const id = req.params.p1;
  const id_usuario = req.params.p1;
  const id_proveedor = req.params.p2;
  const nombreCotizacion= req.params.p3;
  const est  = req.params.p5;
  
  
  
   try {
         await pool.query("select erp_produccion.erp_actualizar_cotizacion_adquisicion($1,$2,$3,$4,$5)",[id,id_usuario,id_proveedor,nombreCotizacion,est]);
                           
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
         await pool.query("select erp_produccion.erp_eliminar_cotizacion_adquisicion($1)",[id]);
                           
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
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_cotizacionitem()")).rows;
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

module.exports = adquisicion;