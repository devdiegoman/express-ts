'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const routes_1 = __importDefault(require('./routes'));
const middlewares_1 = require('./middlewares');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
// Initialize Routes
(0, routes_1.default)(app);
app.use(middlewares_1.logErrors);
app.use(middlewares_1.boomErrorHandler);
app.use(middlewares_1.errorHandler);
app.listen('4000', () => {
  console.log(`[server]: Server is running at hattps://localhost: ${port}`);
});
