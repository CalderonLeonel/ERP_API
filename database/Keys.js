import {Pool} from 'pg';

const pool = new Pool({
    host : '127.0.0.1',
    port : '5432',
    user : 'postgres',
    password : 'univalle',
    database :'erp_produccion'
});

module.exports = pool;