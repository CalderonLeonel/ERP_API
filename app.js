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
    } else { 
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
//app.use('/', require('./routes/auth.routes'));
app.use('/proveedor', require('./routes/proveedor.routes'));
app.use('/almacen', require('./routes/almacen.routes'));
app.use('/stand', require('./routes/stand.routes'));
app.use('/seccion', require('./routes/seccion.routes'));
app.use('/inventario', require('./routes/inventario.routes'));
app.use('/adquisicion', require('./routes/adquisicion.routes'));
app.use('/documento', require('./routes/documento.routes'));

//MIDELWARES FOR VUE
app.use(history());
//app.use('/imagenes', express.static('imagenes'))
//app.use(e.single('archivo'));

// SETTINGS
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('EL PUERTO DEL SERVIDOR ES ' + app.get('port'));
})


