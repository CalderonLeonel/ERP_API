import pool from '../database/Keys'
const areas ={};

areas.listarareas = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarareas()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun area.",
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

areas.addarea = async(req,res) =>{
    const nom = req.params.p1;
    try {
        await pool.query("select proyectoerp.erp_addarea($1)",[nom]);
                             
               res.status(200).json({
                   message:'Se ha registrado el area con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

areas.editararea = async(req,res) =>{
    const idarea = req.params.p1;
    const nom = req.params.p2;
    try {
        await pool.query("select proyectoerp.erp_editararea($1,$2)",[idarea,nom]);
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

areas.offarea = async (req, res) => {
    const idarea = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offarea($1)", [idarea]);
  
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

  areas.onarea = async (req, res) => {
    const idarea = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onarea($1)", [idarea]);
  
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

module.exports = areas;