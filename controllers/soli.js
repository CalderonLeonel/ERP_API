import pool from '../database/Keys'
const solicitudes ={};

solicitudes.listarsolicitudes = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarsolicitudes()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No existe ningun solicitud de personal.",
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

solicitudes.addsolicitud = async(req,res) =>{
    const pues = req.params.p1;
    const des = req.params.p2;
    const idusu = req.params.p3;
    try {
        await pool.query("select proyectoerp.erp_addsolicitud($1,$2,$3)",[pues,des,idusu]);
                             
               res.status(200).json({
                   message:'Se ha registrado el solicitud de personal con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
       }
   
   };

solicitudes.editarsolicitud = async(req,res) =>{
    const idsoli = req.params.p1;
    const pues = req.params.p2;
    const des = req.params.p3;
    try {
        await pool.query("select proyectoerp.erp_editarsolicitud($1,$2,$3)",[idsoli,pues,des]);
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

solicitudes.offsolicitud = async (req, res) => {
    const idsoli = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offsolicitud($1)", [idsoli]);
  
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

  solicitudes.onsolicitud = async (req, res) => {
    const idsoli = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onsolicitud($1)", [idsoli]);
  
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

module.exports = solicitudes;