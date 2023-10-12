import {Pool} from 'pg';

const pool = new Pool({
    host : '34.31.174.19',
    port : '5432',
    user : 'postgres',
    password : "u-DM'%v-92TYq&m.",
    database :'erp_produccion'
});

module.exports = pool;