import pool from '../database/Keys'
const asistencias ={};

asistencias.listarasistencias = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listar_asistencias()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun registro.",
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
asistencias.listarasistenciasdeldia = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listar_asistencias_del_dia()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun registro aún.",
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

asistencias.addasistencia = async(req,res) =>{
    const idempl = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_addasistencia($1)",[idempl]);
                             
               res.status(200).json({
                   message:'Se ha registrado la asistencia con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
/*
asistencias.editarasistencia = async(req,res) =>{
    const idasis = req.params.p1;
    const asis = req.params.p2;
    const descrip = req.params.p3;
    const salar = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_editarasistencia($1,$2,$3,$4)",[idasis,asis,descrip,salar]);
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

asistencias.deleteasistencia = async(req,res) =>{
    const idasistencia = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_deleteasistencia($p1)",[idasistencia]);
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

asistencias.getasistencia = async(req,res) =>{
    const idasistencia = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_getasistencia($p1)",[idasistencia])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"El asistencia no existe.",
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

asistencias.offasistencia = async (req, res) => {
    const idasis = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offasistencia($1)", [idasis]);
  
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

  asistencias.onasistencia = async (req, res) => {
    const idasis = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onasistencia($1)", [idasis]);
  
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
*/
module.exports = asistencias;