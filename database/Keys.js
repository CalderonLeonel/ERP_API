import {Pool} from 'pg';

const pool = new Pool({
    //host : '34.176.107.230',
    host : '127.0.0.1',
    port : '5432',
    user : 'postgres',
    //password : "u-DM'%v-92TYq&m.",
    password : "root",
    database :'erp_produccion'
});

module.exports = pool;