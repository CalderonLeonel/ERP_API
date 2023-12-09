import pool from '../database/Keys'
const horarios ={};

horarios.listarhorarios = async(req,res) =>{
    const idturn = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarhorarios($1)",[idturn])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningún horario.",
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

horarios.addhorario = async(req,res) =>{
    const diaIni = req.params.p1;
    const diaFin = req.params.p2;
    const hraIni = req.params.p3;
    const hraFin = req.params.p4;
    const idturn = req.params.p5;
    try {
        await pool.query("select proyectoerp.erp_addhorario($1,$2,$3,$4,$5)",[diaIni,diaFin,hraIni,hraFin,idturn]);
                             
               res.status(200).json({
                   message:'Se ha registrado el horario con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

horarios.editarhorario = async(req,res) =>{
    const idhor = req.params.p1;
    const diaIni = req.params.p2;
    const diaFin = req.params.p3;
    const hraIni = req.params.p4;
    const hraFin = req.params.p5;
    
    try {
        await pool.query("select proyectoerp.erp_editarhorario($1,$2,$3,$4,$5)",[idhor,diaIni,diaFin,hraIni,hraFin]);
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

horarios.deletehorario = async(req,res) =>{
    const idhor = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_deletehorario($1)",[idhor]);
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

module.exports = horarios;