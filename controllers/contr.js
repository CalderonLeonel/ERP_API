import pool from '../database/Keys'
const contratos ={};

contratos.listarcontratos = async(req,res) =>{
    const idempl = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarcontratos($1)",[idempl])).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun contrato.",
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

contratos.addcontrato = async(req,res) =>{
    const arc = req.params.p1;
    const fecIni = req.params.p2;
    const fecFin = req.params.p3;
    const idempl = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_addcontrato($1,$2,$3,$4)",[arc,fecIni,fecFin,idempl]);
                             
               res.status(200).json({
                   message:'Se ha registrado el contrato con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
           console.log(error)
       }
   
   };

contratos.editarcontrato = async(req,res) =>{
    const idcont = req.params.p1;
    const cont = req.params.p2;
    const fecIni = req.params.p3;
    const fecFin = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_editarcontrato($1,$2,$3,$4)",[idcont,cont,fecIni,fecFin]);
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

contratos.offcontrato = async (req, res) => {
    const idcont = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offcontrato($1)", [idcont]);
  
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

  contratos.oncontrato = async (req, res) => {
    const idcont = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_oncontrato($1)", [idcont]);
  
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

module.exports = contratos;