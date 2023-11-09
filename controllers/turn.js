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

turnos.editturno = async(req,res) =>{
    const idturn = req.params.p1;
    const turn = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_editturno($1,$2)",[idturn,turn]);
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

turnos.getturno = async(req,res) =>{
    const idturn = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_getturno($p1)",[idturn])).rows;
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

module.exports = turnos;