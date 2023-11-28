import pool from '../database/Keys'
const authentication ={};

authentication.signin = async(req,res) =>{
 const {user,password} = req.body;
  try {
        const usuario = await(await pool.query("select * from proyectoerp.erp_auth($1,$2)",[user,password])).rows;
        if (usuario.length>0){
            res.status(200).json({
             id_usuario:usuario[0].id_usuario,
             usuario:usuario[0].usuario,
             accesos:usuario[0].accesos,
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

module.exports = authentication;
