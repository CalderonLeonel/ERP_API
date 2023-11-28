import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import history from 'connect-history-api-fallback';
import path from 'path';
import multer from 'multer';
import sharp from 'sharp';



//const express require('express');
//const morgan require('morgan');
//const cors require('cors');
//const fileUpload require('express-file');
//const history require('connect-history-api-fallback');
//const path require('path');

const app = express();

global.__basedir = __dirname;

/*const storage = multer.memoryStorage();
const upload = multer({ storage: storage });*/



//MIDELWARES 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(fileUpload({useTempFiles:true}));

//MULTER
const storage =  multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "file") { 
      cb(null, './archivos/documentos');
    }
    else if(file.fieldname === "inventory"){
      cb(null, './archivos/inventory');
    }
    else if(file.fieldname === "adquisition"){
      cb(null, './archivos/adquisition');
    }
    else if(file.fieldname === "employee"){
      cb(null, './archivos/employee');
    }
    else if(file.fieldname == "image"){
      cb(null, './archivos/imagenes');
    }
    
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.')
    const date = new Date();
    const fechaHoraActual = date.getDate().toString().padStart(2, '0')+'_'+(date.getMonth() + 1).toString().padStart(2, '0')+'_'+date.getFullYear();
    cb(null, `${ext[0]+'_'+fechaHoraActual+'.'+ext[1]}`)
  }
})

const upload = multer({storage});

app.post('/uploadfile', upload.single('file'), (req, res) =>{
  res.send({data: 'IMAGEN CARGADA CON EXITO!!!'})
})

app.post('/uploadimage', upload.single('image'), (req, res) =>{
  res.send({data: 'IMAGEN CARGADA CON EXITO!!!'})
})



//ROUTES
app.use('/', require('./routes/auth.routes'));
app.use('/cargo', require('./routes/cargo.routes'));
app.use('/empleado', require('./routes/empleado.routes'));
app.use('/nivel', require('./routes/nivel.routes'));
app.use('/usuario', require('./routes/usuario.routes'));
app.use('/producto', require('./routes/producto.routes'));
app.use('/linea', require('./routes/linea.routes'));
app.use('/formato', require('./routes/formato.routes'));
app.use('/tipo', require('./routes/tipoProducto.routes'));
app.use('/fabrica', require('./routes/fabrica.routes'));
app.use('/produccion', require('./routes/produccion.routes'));
app.use('/venta', require('./routes/venta.routes'));
app.use('/cliente', require('./routes/cliente.routes'));
//app.use('/', require('./routes/auth.routes'));
app.use('/proveedor', require('./routes/proveedor.routes'));
app.use('/almacen', require('./routes/almacen.routes'));
app.use('/stand', require('./routes/stand.routes'));
app.use('/seccion', require('./routes/seccion.routes'));
app.use('/inventario', require('./routes/inventario.routes'));
app.use('/adquisicion', require('./routes/adquisicion.routes'));
app.use('/acceso', require('./routes/acceso.routes'));
app.use('/documento', require('./routes/documento.routes'));
app.use('/turno', require('./routes/turno.routes'));
app.use('/unidad', require('./routes/unidad.routes'));
app.use('/area', require('./routes/area.routes'));
app.use('/departamento', require('./routes/departamento.routes'));

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
//MIDELWARES FOR VUE
app.use(history());
//app.use('/imagenes', express.static('imagenes'))
//app.use(e.single('archivo'));

// SETTINGS
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('EL PUERTO DEL SERVIDOR ES ' + app.get('port'));
})


