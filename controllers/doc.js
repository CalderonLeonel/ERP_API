import pool from "../database/Keys";
const documento = {};


documento.listardocumentos = async (req, res) => {
    try {
      const resultado = await(await pool.query("SELECT * FROM proyectoerp.erp_listar_documentos()")).rows;
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

  documento.agregarDocumento  = async(req,res) =>{
    const nombreDocumento = req.body.nombreDocumento;
    const archivo = req.body.archivo; 
    const descripcion = req.body.descripcion;
    const codigo = req.body.codigo;
    const est = req.body.est;
    
     try {
           await pool.query("select proyectoerp.erp_insertar_documento($1,$2,$3,$4,$5)",[nombreDocumento,archivo,descripcion,codigo,est]);
                             
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


   documento.actualizarDocumento = async(req,res) =>{
    const id = req.params.id;
    const nombreDocumento = req.body.nombreDocumento;
    const archivo = req.body.archivo; 
    const descripcion = req.body.descripcion;
    const codigo = req.body.codigo;
    const est = req.body.est;
    
    
    
     try {
           await pool.query("select proyectoerp.erp_actualizar_documento($1,$2,$3,$4,$5,$6",[id,nombreDocumento,archivo,descripcion,codigo,est]);
                             
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


   documento.eliminarDocumento = async(req,res) =>{
    const id = req.params.p1;
  
  
     try {
           await pool.query("select proyectoerp.erp_eliminar_documento($1)",[id]);
                             
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


  

module.exports = documento;