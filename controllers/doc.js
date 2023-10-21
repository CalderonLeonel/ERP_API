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
    const nombreDocumento = req.params.p1;
    const archivo = req.params.p2;
    const tipoArchivo= req.params.p3;
    const tamanioArchivo  = req.params.p4;
    const descripcion = req.params.p5;
    const codigo= req.params.p6;
    const est  = req.params.p7;
    
    
     try {
           await pool.query("select proyectoerp.erp_insertar_documento($1,$2,$3,$4,$5,$6,$7)",[nombreDocumento,archivo,tipoArchivo,tamanioArchivo,descripcion,codigo,est]);
                             
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




  

module.exports = documento;