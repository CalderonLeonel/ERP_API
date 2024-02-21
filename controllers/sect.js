import pool from '../database/Keys'
const sectores ={};

sectores.listarsectores = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarsectores()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun sector.",
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

sectores.addsector = async(req,res) =>{
    const nom = req.params.p1;
    const iddep = req.params.p2
    try {
        await pool.query("select proyectoerp.erp_addsector($1,$2)",[nom,iddep]);
                             
               res.status(200).json({
                   message:'Se ha registrado el sector con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };
   sectores.asignarturnoasector = async(req,res) =>{
    const idturn = req.params.p1;
    const idsect = req.params.p2
    try {
        await pool.query("select proyectoerp.erp_asignarturnoasector($1,$2)",[idturn,idsect]);
                             
               res.status(200).json({
                   message:'Se ha registrado el turno al sector con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

sectores.editarsector = async(req,res) =>{
    const idsect = req.params.p1;
    const nom = req.params.p2;
    const iddep = req.params.p3;
    try {
        await pool.query("select proyectoerp.erp_editarsector($1,$2,$3)",[idsect,nom,iddep]);
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

sectores.offsector = async (req, res) => {
    const idsect = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offsector($1)", [idsect]);
  
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

  sectores.onsector = async (req, res) => {
    const idsect = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onsector($1)", [idsect]);
  
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

module.exports = sectores;