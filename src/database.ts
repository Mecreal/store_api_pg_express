import dotenv from 'dotenv';
import config from './config';
import { ClientConfig, Pool } from 'pg';

// let client:Pool;
// let clientConfig;
// console.log(ENV)
// if(ENV==='test'){
//     clientConfig ={
//     host: POSTGRES_HOST,
//     database: POSTGRES_TEST_DB,
//     user: POSTGRES_USER,
//     password: POSTGRES_PASSWORD,
//     }
// }
// if(ENV === 'dev') {
//     clientConfig = {
//     host: POSTGRES_HOST,
//     database: POSTGRES_DB,
//     user: POSTGRES_USER,
//     password: POSTGRES_PASSWORD,
//     };
// }
// client = new Pool(clientConfig);
// export default client;
