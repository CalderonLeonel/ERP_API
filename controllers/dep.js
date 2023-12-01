import pool from '../database/Keys'
const departamentos ={};

departamentos.listardepartamentos = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listardepartamentos()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun departamento.",
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

departamentos.adddepartamento = async(req,res) =>{
    const nom = req.params.p1;
    const idunid= req.params.p2;
    const idarea = req.params.p3;
    
    try {
        await pool.query("select proyectoerp.erp_adddepartamento($1,$2,$3)",[nom,idunid,idarea]);
                             
               res.status(200).json({
                   message:'Se ha registrado el departamento con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

departamentos.editardepartamento = async(req,res) =>{
    const iddep = req.params.p1;
    const nom = req.params.p2;
    const idunid = req.params.p3;
    const idarea = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_editardepartamento($1,$2,$3,$4)",[iddep,nom,idunid,idarea]);
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

departamentos.offdepartamento = async (req, res) => {
    const iddep = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offdepartamento($1)", [iddep]);
  
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

  departamentos.ondepartamento = async (req, res) => {
    const iddep = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_ondepartamento($1)", [iddep]);
  
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

module.exports = departamentos;
