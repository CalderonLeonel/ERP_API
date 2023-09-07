import pool from '../database/Keys'
const authentication ={};

authentication.signIn = async(req,res) =>{
 const {user,password} = req.body;
  try {
        const usuario = await(await pool.query("select * from proyectoerp.erp_auth($1,$2)",[user,password])).rows;
        if (usuario.length>0){
            res.status(200).json({
             id_usuario:usuario[0].id_usuario,
             usuario:usuario[0].usuario,
             id_cargo:usuario[0].id_cargo,
             estado:usuario[0].estado,
             nombres:usuario[0].nombres,
             paterno:usuario[0].paterno,
             materno:usuario[0].materno
            });
        }
        else {
            res.status(200).json({
                message:"EL USUARIO NO EXISTE :(",
                NotFount : true,
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
/*
authentication.login = async(req,res) =>{
 const {user,password} = req.body;
  try {
        const usuario = await(await pool.query("select * from erp.erp_auth($1,$2)",[user,password])).rows;
        if (usuario.length>0){
            res.status(200).json({
             usuario:usuario[0].email,
             id_sede:usuario[0].id_sede,
             id_rol:usuario[0].id_rol,
             personal:usuario[0].id_usuario,
             nombres:usuario[0].nombres,
             paterno:usuario[0].paterno,
             materno:usuario[0].materno,
             sede:usuario[0].departamento
            });
        }
        else {
            res.status(200).json({
                message:"EL USUARIO NO EXISTE :(",
                NotFount : true,
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
*/
module.exports = authentication;