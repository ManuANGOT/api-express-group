import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'p3p',
  password: 'postgres',
  port: 5432, // Port par défaut de PostgreSQL
});

export default pool;
