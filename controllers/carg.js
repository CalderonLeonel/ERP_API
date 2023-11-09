import pool from '../database/Keys'
const cargos ={};

cargos.listarcargos = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarcargos()")).rows;
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
    const salar = req.params.p3;
    try {
        await pool.query("select proyectoerp.erp_addcargo($1,$2,$3)",[carg,descrip,salar]);
                             
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

cargos.editarcargo = async(req,res) =>{
    const idcarg = req.params.p1;
    const carg = req.params.p2;
    const descrip = req.params.p3;
    const salar = req.params.p4;
    try {
        await pool.query("select proyectoerp.erp_editarcargo($1,$2,$3,$4)",[idcarg,carg,descrip,salar]);
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

cargos.offcargo = async (req, res) => {
    const idcarg = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offcargo($1)", [idcarg]);
  
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

  cargos.oncargo = async (req, res) => {
    const idcarg = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_oncargo($1)", [idcarg]);
  
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

module.exports = cargos;