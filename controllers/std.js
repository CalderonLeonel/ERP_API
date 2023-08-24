import pool from "../database/Keys";
const stand = {};

stand.listarStands = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_stand()")).rows;
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


stand.agregarStand = async (req, res) => {
  const nombre = req.params.p1;
  const idSeccion = req.params.p2;
  const est  = req.params.p3;
  
  
   try {
         await pool.query("select erp_produccion.erp_insertar_seccion($1,$2,$3)",[nombre,idSeccion,est]);
                           
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



 stand.actualizarStand = async(req,res) =>{
  const id = req.params.p1;
  const nombre = req.params.p2;
  const idSeccion  = req.params.p3;
  const est  = req.params.p4;
  
  
   try {
         await pool.query("select erp_produccion.erp_actualizar_stand($1,$2,$3,$4)",[id,nombre,idSeccion,est]);
                           
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


 stand.eliminarStand = async(req,res) =>{
  const id = req.params.p1;


   try {
         await pool.query("select erp_produccion.erp_eliminar_stand($1)",[id]);
                           
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



module.exports = stand;