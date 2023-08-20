import pool from '../database/Keys'
const empleados ={};

empleados.listallempleados = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from erp.erp_listallempleados()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"NO EXISTEN DATOS:(",
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