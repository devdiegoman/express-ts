'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const products_router_1 = __importDefault(require('./products.router'));
const categories_router_1 = __importDefault(require('./categories.router'));
const routerApi = (app) => {
  const router = express_1.default.Router();
  app.use('/api/v1', router);
  router.use('/products', products_router_1.default);
  router.use('/categories', categories_router_1.default);
};
exports.default = routerApi;
