import pool from "../database/Keys";
const proveedor = {};

proveedor.listarproveedores = async (req, res) => {
  try {
    const resultado = await(await pool.query("SELECT * FROM erp_produccion.erp_listar_proveedores()")).rows;
    if (resultado.length > 0) {
      res.status(200).json({ resultado });
    } else {
      res.status(200).json({
        message: "NO EXISTEN DATOS:(",
        NotFount: true,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!",
      error,
    });
  }
};


proveedor.agregarProveedor = async(req,res) =>{
  const nombre = req.params.p1;
  const contacto1 = req.params.p2;
  const contacto2= req.params.p3;
  const correo = req.params.p4;
  const est  = req.params.p5;
  
  
   try {
         await pool.query("select erp_produccion.erp_insertar_proveedor($1,$2,$3,$4,$5)",[nombre,contacto1,contacto2,correo,est]);
                           
             res.status(200).json({
                 message:'SE GUARDARON LOS CAMBIOS :)'
           
             })
         
                    
     } catch (error) {
         res.status(500).json({
             message:'INESPERADO ERROR REPORTELO A ASI INMEDIATAMENTE, GRACIAS !!!',
             error
         })
     }
 
 };

module.exports = proveedor;