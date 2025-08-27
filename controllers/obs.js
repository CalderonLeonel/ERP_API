import pool from '../database/Keys'
const observaciones ={};

observaciones.listarobservaciones = async(req,res) =>{
    const idempl = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarobservaciones($1)",[idempl])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun observacion.",
                NotFount:true,
            });
        }
    } catch (error) {
        res.status(500).json({
            message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error
        })
        console.log("ERROR: "+error.message);
    }
};

observaciones.addobservacion = async(req,res) =>{
    const obs = req.params.p1;
    const com = req.params.p2;
    const fec = req.params.p3;
    const idempl = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_addobservacion($1,$2,$3,$4)",[obs,com,fec,idempl]);
                             
               res.status(200).json({
                   message:'SE REGISTRO LA OBSERVACION CON EXITO'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
           console.log(error)
       }
   
   };

observaciones.editarobservacion = async(req,res) =>{
    const idobs = req.params.p1;
    const obs = req.params.p2;
    const com = req.params.p3;
    const fec = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_editarobservacion($1,$2,$3,$4)",[idobs,obs,com,fec]);
            res.status(200).json({
                message:'SE GUARDARON LOS CAMBIOS!!!'
            })
    } catch (error) {
        res.status(500).json({
            message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error
        })
        console.log("ERROR: "+error.message);
    }
};

observaciones.offobservacion = async (req, res) => {
    const idobs = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offobservacion($1)", [idobs]);
  
      res.status(200).json({
        message: "REGISTRO MODIFICADO CORRECTAMENTE",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
        error,
      });
    }
  };

  observaciones.onobservacion = async (req, res) => {
    const idobs = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onobservacion($1)", [idobs]);
  
      res.status(200).json({
        message: "REGISTRO MODIFICADO CORRECTAMENTE",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "ERROR INESPERADO REPORTELO AL DEPARTAMENTO DE SISTEMAS, GRACIAS !!!",
        error,
      });
    }
  };

module.exports = observaciones;