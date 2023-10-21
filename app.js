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
//const fileUpload require('express-fileupload');
//const history require('connect-history-api-fallback');
//const path require('path');

const app = express();

//MIDELWARES 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(fileUpload({useTempFiles:true}));

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
app.use('/uploads', express.static('uploads'))

// SETTINGS
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('EL PUERTO DEL SERVIDOR ES ' + app.get('port'));
})

