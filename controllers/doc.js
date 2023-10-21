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


  

module.exports = documento;