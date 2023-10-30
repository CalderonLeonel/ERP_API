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
app.use('/acceso', require('./routes/acceso.routes'));
app.use('/turno', require('./routes/turno.routes'));


app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
//MIDELWARES FOR VUE
app.use(history());
app.use('/uploads', express.static('uploads'))

// SETTINGS
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('EL PUERTO DEL SERVIDOR ES ' + app.get('port'));
})

