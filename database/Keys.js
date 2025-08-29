import {Pool} from 'pg';


const pool = new Pool({
    host : '35.226.29.241',
    port : '5432',
    user : 'postgres',
    password : "u-DM'%v-92TYq&m.",
    database :'defensa'
});
/*
const pool = new Pool({
    host : '127.0.0.1',
    port : '5432',
    user : 'postgres',
    password : "root",
    database :'defensa'
});*/


module.exports = pool;