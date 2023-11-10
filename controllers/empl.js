import pool from '../database/Keys'
const empleados ={};

empleados.listarempleados = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarempleados()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No hay empleados registraods",
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

empleados.addempleado = async(req,res) =>{
    const nombres = req.params.p1;
    const paterno = req.params.p2;
    const materno = req.params.p3;
    const email = req.params.p4;
    const fechaNacimiento = req.params.p5;
    const ci = req.params.p6;
    const telefono = req.params.p7;
    const idcargo = req.params.p8;
    try {
        await pool.query("select proyectoerp.erp_addempleado($1,$2,$3,$4,$5,$6,$7,$8)",[nombres,paterno,materno,email,fechaNacimiento,ci,telefono,idcargo]);
                             
               res.status(200).json({
                   message:'Se ha registrado el empleado con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

empleados.editempleado = async(req,res) =>{
    const idempleado = req.params.p1;
    const nombres = req.params.p2;
    const paterno = req.params.p3;
    const materno = req.params.p4;
    const email = req.params.p5;
    const fechaNacimiento = req.params.p6;
    const ci = req.params.p7;
    const telefono = req.params.p8;
    const idcargo = req.params.p9;
    try {
        await pool.query("select proyectoerp.erp_addempleado($1,$2,$3,$4,$5,$6,$7,$8,$9)",[idempleado,nombres,paterno,materno,email,fechaNacimiento,ci,telefono,idcargo]);
                             
               res.status(200).json({
                   message:'Se ha registrado el empleado con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };



empleados.getempleado = async(req,res) =>{
    const idempleado = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_getempleado($p1)",[idempleado])).rows;
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

module.exports = empleados;