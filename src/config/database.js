import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

const pool = new Pool({
  user: 'nom_utilisateur',
  host: 'localhost',
  database: 'userDatabase',
  password: 'mot_de_passe',
  port: 5432, // Port par défaut de PostgreSQL
});

export default pool;
