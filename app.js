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
app.use('/', require('./routes/auth.routes'));
app.use('/producto', require('./routes/producto.routes'));
app.use('/linea', require('./routes/linea.routes'));
app.use('/formato', require('./routes/formato.routes'));
app.use('/tipo', require('./routes/tipoProducto.routes'));
app.use('/fabrica', require('./routes/fabrica.routes'));
app.use('/produccion', require('./routes/produccion.routes'));
app.use('/venta', require('./routes/venta.routes'));
app.use('/cliente', require('./routes/cliente.routes'));
app.use('/ciudad', require('./routes/ciudad.routes'));
app.use('/departamento', require('./routes/departamento.routes'));
app.use('/materia', require('./routes/materiaprima.routes'));









//MIDELWARES FOR VUE
app.use(history());
app.use('/uploads', express.static('uploads'))

// SETTINGS
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('EL PUERTO DEL SERVIDOR ES ' + app.get('port'));
})

