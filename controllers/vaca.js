import pool from '../database/Keys'
const vacaciones ={};

vacaciones.listarvacaciones = async(req,res) =>{
    const idempl = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarvacaciones($1)",[idempl])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun vacacion.",
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

vacaciones.addvacacion = async(req,res) =>{
    const fecIni = req.params.p1;
    const fecFin = req.params.p2;
    const idempl = req.params.p3;
    try {
        await pool.query("select proyectoerp.erp_addvacacion($1,$2,$3)",[fecIni,fecFin,idempl]);
                             
               res.status(200).json({
                   message:'Se ha registrado la vacación con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
           console.log(error)
       }
   
   };

vacaciones.editarvacacion = async(req,res) =>{
    const idvaca = req.params.p1;
    const fecIni = req.params.p2;
    const fecFin = req.params.p3;
    try {
        await pool.query("select proyectoerp.erp_editarvacacion($1,$2,$3)",[idvaca,fecIni,fecFin]);
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

vacaciones.offvacacion = async (req, res) => {
    const idvaca = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offvacacion($1)", [idvaca]);
  
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

  vacaciones.onvacacion = async (req, res) => {
    const idvaca = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onvacacion($1)", [idvaca]);
  
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

module.exports = vacaciones;