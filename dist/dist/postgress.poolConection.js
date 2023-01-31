'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const pg_1 = require('pg');
const pool = new pg_1.Pool({
  host: 'localhost',
  port: 5432,
  user: 'diego',
  password: 'admin123',
  database: 'my_store',
});
exports.default = pool;
