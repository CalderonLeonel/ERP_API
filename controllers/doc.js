import pool from "../database/Keys";
const fs = require('fs');
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
    console.log(req.params);
    const nombreDocumento = req.params.p1;
    const archivo = req.params.p2;
    const descripcion = req.params.p3;
    const codigo = req.params.p4;
    const est = req.params.p5;
    
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
    const id = req.params.p1;
    const nombreDocumento = req.params.p2;
    const archivo = req.params.p3;
    const descripcion = req.params.p4;
    const codigo = req.params.p5;
    const est = req.params.p6;
    
    
    
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

   documento.download = (req, res) => {
    const fileName = req.params.p1;
    const directoryPath = __basedir + "/archivos/documentos/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };


  documento.getListFiles = (req, res) => {
    console.log(__basedir);
    const directoryPath = __basedir + "/archivos/documentos/";
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
      let fileInfos = [];
  
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          //url:  "/archivos/documentos/"+file,
          url:  "documento/descargar/"+file,
        });
      });
  
      const resultado = {'resultado':fileInfos};
      
      res.status(200).send(resultado);
    });
  };
  


  

module.exports = documento;