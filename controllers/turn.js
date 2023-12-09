import pool from '../database/Keys'
const turnos ={};

turnos.listarturnos = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarturnos()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun turno.",
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
turnos.listarturnossins = async(req,res) =>{
    const idsect = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarturnossins($1)",[idsect])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"El empleado no existe.",
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
turnos.listarturnoscons = async(req,res) =>{
    const idsect = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarturnoscons($1)",[idsect])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"El empleado no existe.",
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
turnos.addturno = async(req,res) =>{
    const turn = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_addturno($1)",[turn]);
                             
               res.status(200).json({
                   message:'Se ha registrado el turno con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

turnos.editarturno = async(req,res) =>{
    const idturn = req.params.p1;
    const turn = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_editarturno($1,$2)",[idturn,turn]);
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

turnos.deleteturno = async(req,res) =>{
    const idturn = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_deleteturno($p1)",[idturn]);
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
turnos.offturno = async (req, res) => {
    const idturn = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offturno($1)", [idturn]);
  
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

  turnos.onturno = async (req, res) => {
    const idturn = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onturno($1)", [idturn]);
  
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


turnos.getturno = async(req,res) =>{
    const idturn = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_getturno($1)",[idturn])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"El turno no existe.",
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
turnos.removerturnodesector = async(req,res) =>{
    const idturn = req.params.p1;
    const idsect = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_removerturnodesector($1,$2)",[idturn,idsect]);
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

module.exports = turnos;