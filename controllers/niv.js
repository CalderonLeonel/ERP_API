import pool from '../database/Keys'
const niveles = {};

niveles.addnivel = async(req,res) =>{
    const idcarg = req.params.p1;
    const acc = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_addnivelacceso($1,$2)",[idcarg,acc]);
                             
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

module.exports = niveles;