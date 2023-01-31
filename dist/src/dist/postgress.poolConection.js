'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const pg_1 = require('pg');
const config_1 = __importDefault(require('../../config/config'));
const USER = encodeURIComponent(config_1.default.dbUser || 'admin');
const PASSWORD = encodeURIComponent(config_1.default.dbPassword || 'root');
const URI = `postgres://${USER}:${PASSWORD}@${config_1.default.dbHost}:${config_1.default.dbPort}/${config_1.default.dbName}`;
const pool = new pg_1.Pool({ connectionString: URI });
exports.default = pool;
