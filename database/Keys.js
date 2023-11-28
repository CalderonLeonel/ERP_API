import {Pool} from 'pg';

const pool = new Pool({
    host : '10.102.48.3',
    port : '5432',
    user : 'postgres',
    password : "u-DM'%v-92TYq&m.",
    database :'erp_produccion'
});

module.exports = pool;