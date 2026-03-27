import knex from 'knex';
import 'dotenv/config';

const ENV = (process.env.ENV || 'staging').toUpperCase();

const dbConfig = {
    client: 'mysql2',
    connection: {
        host: process.env[`${ENV}_DB_HOST`],
        user: process.env[`${ENV}_DB_USER`],
        password: process.env[`${ENV}_DB_PASSWORD`],
        database: process.env[`${ENV}_DB_NAME`],
        port: Number(process.env[`${ENV}_DB_PORT`]) || 3306
    },
    pool: { min: 0, max: 7 }
};

const db = knex(dbConfig);

export default db;

/**
 * Example usage:
 * import db from '../utils/DatabaseUtil.js';
 * const user = await db('users').where('id', 1).first();
 */
