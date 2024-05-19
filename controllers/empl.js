import pool from '../database/Keys'
const empleados = {};

empleados.listarempleados = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarempleados()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No hay empleados registrados",
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

empleados.listarempleadossinc = async(req,res) =>{
  try {
      const resultado = await(await pool.query("select * from proyectoerp.erp_listarempleadossinc()")).rows;
      if (resultado.length>0){
          res.status(200).json({resultado});
      }
      else {
          res.status(200).json({
              message:"No hay empleados registrados",
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

empleados.listarempleadosactivos = async(req,res) =>{
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_listarempleadossinc()")).rows;
        if (resultado.length>0){
            res.status(200).json({resultado});
        }
        else {
            res.status(200).json({
                message:"No hay empleados registrados",
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
    const nom = req.params.p1;
    const pat = req.params.p2;
    const mat = req.params.p3;
    const ism = req.params.p4;
    const est = req.params.p5;
    const emal = req.params.p6;
    const nacDte = req.params.p7;
    const ci = req.params.p8;
    const tel = req.params.p9;
    const idcarg = req.params.p10;
    const iddep = req.params.p11;
    try {
        await pool.query("select proyectoerp.erp_addempleado($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[nom,pat,mat,ism,est,emal,nacDte,ci,tel,idcarg,iddep]);

                res.status(200).json({
                    message:'Se ha registrado el empleado con éxito.'
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
           console.log("ERROR: "+error.message);
       }
   
   };
   empleados.addempleadosinmaterno = async(req,res) =>{
    const nom = req.params.p1;
    const pat = req.params.p2;
    const ism = req.params.p3;
    const est = req.params.p4;
    const emal = req.params.p5;
    const nacDte = req.params.p6;
    const ci = req.params.p7;
    const tel = req.params.p8;
    const idcarg = req.params.p9;
    const iddep = req.params.p10;
    try {
        await pool.query("select proyectoerp.erp_addempleadosinmaterno($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",[nom,pat,ism,est,emal,nacDte,ci,tel,idcarg,iddep]);

                res.status(200).json({
                    message:'Se ha registrado el empleado con éxito.'
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
           console.log("ERROR: "+error.message);
       }
   
   };

   empleados.editarempleado = async (req, res) => {
    const idempl = req.body.p1;
    const nom = req.body.p2;
    const pat = req.body.p3;
    const mat = req.body.p4;
    const ism = req.body.p5;
    const est = req.body.p6;
    const emal = req.body.p7;
    const nacDte = req.body.p8;
    const ci = req.body.p9;
    const tel = req.body.p10;
    const idcarg = req.body.p11;
    const iddep = req.body.p12;

    try {
        await pool.query("select proyectoerp.erp_editarempleado($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)", [idempl, nom, pat, mat, ism, est, emal, nacDte, ci, tel, idcarg, iddep]);

        res.status(200).json({
            message: 'Se ha editado el empleado con éxito.'
        });
    } catch (error) {
        res.status(500).json({
            message: 'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error: error.message
        });
        console.log("ERROR: " + error.message);
    }
};
empleados.subirfoto = async (req, res) => {
    const idempl = req.body.p1;
    const url = req.body.p2;
    try {
        await pool.query("select proyectoerp.erp_subirfoto($1,$2)", [idempl, url]);

        res.status(200).json({
            message: 'Se ha subido la foto con éxito.'
        });
    } catch (error) {
        res.status(500).json({
            message: 'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
            error: error.message
        });
        console.log("ERROR: " + error.message);
    }
};
/*
empleados.editarempleado = async(req,res) =>{
    const idempl = req.params.p1;
    const nom = req.params.p2;
    const pat = req.params.p3;
    const mat = req.params.p4;
    const ism = req.params.p5;
    const est = req.params.p6;
    const emal = req.params.p7;
    const nacDte = req.params.p8;
    const ci = req.params.p9;
    const tel = req.params.p10;
    const idcarg = req.params.p11;
    const iddep = req.params.p12;
    try {
        await pool.query("select proyectoerp.erp_editarempleado($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",[idempl,nom,pat,mat,ism,est,emal,nacDte,ci,tel,idcarg,iddep]);
                             
               res.status(200).json({
                   message:'Se ha editado el empleado con éxito.'
             
               })
           
    } catch (error) {
           res.status(500).json({
               message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
               error
           })
           console.log("ERROR: "+error.message);
       }
   
   };
*/


empleados.getempleado = async(req,res) =>{
    const idempl = req.params.p1;
    try {
        const resultado = await(await pool.query("select * from proyectoerp.erp_getempleado($1)",[idempl])).rows;
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


empleados.offempleado = async (req, res) => {
    const idempl = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_offempleado($1)", [idempl]);
  
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

  empleados.onempleado = async (req, res) => {
    const idempl = req.params.p1;
    try {
      await pool.query("select proyectoerp.erp_onempleado($1)", [idempl]);
  
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



  //alertas
    empleados.listaralertas = async(req,res) =>{
        try {
            const resultado = await(await pool.query("select * from proyectoerp.erp_listar_alerta()")).rows;
            if (resultado.length>0){
                res.status(200).json({resultado});
            }
            else {
                res.status(200).json({
                    message:"No hay alertas registradas",
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

    empleados.crearalertas = async(req,res) =>{
        const { titulo, descripcion, img } = req.body;
        try {
            await pool.query("select proyectoerp.erp_addalerta($1,$2,$3)",[titulo,descripcion,img]);
                                 
                   res.status(200).json({
                       message:'Se ha registrado la alerta con éxito.'
                 
                   })
               
        } catch (error) {
               res.status(500).json({
                   message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
                   error
               })
               console.log("ERROR: "+error.message);
           }
    };

    empleados.editaralertas = async(req,res) =>{
        const idalerta = req.params.p1;
        const titulo = req.params.p2;
        const descripcion = req.params.p3;
        try {
            await pool.query("select proyectoerp.erp_editalerta($1,$2,$3,$4)",[idalerta,titulo,descripcion]);
                                 
                   res.status(200).json({
                       message:'Se ha registrado la alerta con éxito.'
                 
                   })
               
        } catch (error) {
               res.status(500).json({
                   message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
                   error
               })
               console.log("ERROR: "+error.message);
           }
    };

    empleados.offalerta = async (req, res) => {
        const idalerta = req.params.p1;
        try {
          await pool.query("select proyectoerp.erp_offalerta($1)", [idalerta]);
      
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

module.exports = empleados;