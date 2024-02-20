import {Pool} from 'pg';

const pool = new Pool({
    host : 'localhost',//'34.176.107.230',
    port : '5432',
    user : 'postgres',
    password : "univalle",//"u-DM'%v-92TYq&m.",
    database :'erp_produccion'
});

module.exports = pool;