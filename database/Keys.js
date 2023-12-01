import {Pool} from 'pg';

const pool = new Pool({
    host : '34.42.159.150',
    port : '5432',
    user : 'postgres',
    password : 'univalle',//"u-DM'%v-92TYq&m.",
    database :'erp_produccion'
});

module.exports = pool;