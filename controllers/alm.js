import pool from "../database/Keys";
const almacen = {};

almacen.listarAlmacenes = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_almacen()")).rows;
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


almacen.agregarAlmacen = async(req,res) =>{
  const nombreAlmacen = req.params.p1;
  const est= req.params.p2;
  
  
   try {
         await pool.query("select erp_produccion.erp_insertar_almacen($1,$2)",[nombreAlmacen,est]);
                           
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



 almacen.actualizarAlmacen = async(req,res) =>{
  const id = req.params.p1;
  const nombreAlmacen = req.params.p2;
  const est= req.params.p3;
  
   try {
         await pool.query("select erp_produccion.erp_actualizar_almacen($1,$2,$3)",[id,nombreAlmacen,est]);
                           
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


 almacen.eliminarAlmacen = async(req,res) =>{
  const id = req.params.p1;


   try {
         await pool.query("select erp_produccion.erp_eliminar_almacen($1)",[id]);
                           
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



//Almacenamiento

almacen.listarAlmacenamiento = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_almacenamiento()")).rows;
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



almacen.agregarAlmacenamiento = async(req,res) =>{
  const idItem = req.params.p1;
  const idStand= req.params.p2;
  const cantidad= req.params.p3;
  
  
   try {
         await pool.query("select erp_produccion.erp_insertar_almacenamiento($1,$2,$3)",[idItem,idStand,cantidad]);
                           
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


 almacen.editarAlmacenamiento = async(req,res) =>{
  const idItem = req.params.p1;
  const idStand= req.params.p2;
  const cantidad= req.params.p3;
  
  
   try {
         await pool.query("select erp_produccion.erp_actualizar_almacenamiento($1,$2,$3)",[idItem,idStand,cantidad]);
                           
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


module.exports = almacen;