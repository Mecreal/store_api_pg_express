import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
  PORT
} = process.env;

export default {
  port: PORT,
  env: ENV,
  host: POSTGRES_HOST,
  database: POSTGRES_TEST_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD
};
