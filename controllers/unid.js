import pool from '../database/Keys'
const unidades ={};

unidades.listarunidades = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarunidades()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun unidad.",
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

unidades.addunidad = async(req,res) =>{
    const unid = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_addunidad($1)",[unid]);
                             
               res.status(200).json({
                   message:'Se ha registrado el unidad con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

unidades.editarunidad = async(req,res) =>{
    const idunid = req.params.p1;
    const unid = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_editarunidad($1,$2)",[idunid,unid]);
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

unidades.offunidad = async (req, res) => {
    const idunid = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offunidad($1)", [idunid]);
  
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

  unidades.onunidad = async (req, res) => {
    const idunid = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onunidad($1)", [idunid]);
  
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

module.exports = unidades;