import {Pool} from 'pg';


const pool = new Pool({
    host : '34.30.224.196',
    //host : '127.0.0.1',
    port : '5432',
    user : 'postgres',
    password : "u-DM'%v-92TYq&m.",//"u-DM'%v-92TYq&m.",
    database :'erp_produccion'
});

/*const pool = new Pool({
    host : '127.0.0.1',
    port : '5432',
    user : 'postgres',
    password : "developerlover69",
    database :'erp_produccion'
});*/


module.exports = pool;