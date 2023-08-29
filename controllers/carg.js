import pool from '../database/Keys'
const cargos ={};

cargos.listcargo = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from erp.erp_listcargo()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun cargo.",
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

cargos.addcargo = async(req,res) =>{
    const carg = req.params.p1;
    const descrip = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_addempleado($1,$2)",[carg,descrip]);
                             
               res.status(200).json({
                   message:'Se ha registrado el cargo con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

cargos.editcargo = async(req,res) =>{
    const idcarg = req.params.p1;
    const carg = req.params.p2;
    const descrip = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_editcargo($1,$2,$3)",[idcarg,carg,descrip]);
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

cargos.deletecargo = async(req,res) =>{
    const idcargo = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_deletecargo($p1)",[idcargo]);
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

cargos.getcargo = async(req,res) =>{
    const idcargo = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_getcargo($p1)",[idcargo])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"El cargo no existe.",
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

module.exports = cargos;