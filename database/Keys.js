import {Pool} from 'pg';


const pool = new Pool({
    host : '34.30.71.80',
    port : '5432',
    user : 'postgres',
    password : "u-DM'%v-92TYq&m.",
    database :'proyectoerp'
});
/*
const pool = new Pool({
    host : '127.0.0.1',
    port : '5432',
    user : 'postgres',
    password : "univalle",
    database :'proyectoerp'
});
*/

module.exports = pool;