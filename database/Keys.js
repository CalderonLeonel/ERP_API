import {Pool} from 'pg';
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  ssl: {
    rejectUnauthorized: process.env.PG_SSL_REJECT_UNAUTHORIZED === 'true' ? true : false
  }
});

/*onst pool = new Pool({
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