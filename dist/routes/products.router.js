'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
const products_service_1 = __importDefault(require('../services/products.service'));
const middlewares_1 = require('../middlewares');
const product_schema_1 = require('../schemas/product.schema');
dotenv_1.default.config();
const router = express_1.default.Router();
const service = new products_service_1.default();
/*
    Products
*/
router.get('/', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const products = yield service.find();
      res.json(products);
    } catch (error) {
      throw Error(`Unable to get products by error ${error}`);
    }
  })
);
router.post('/', (0, middlewares_1.validatorHandler)(product_schema_1.createProductSchema, 'body'), (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const body = req.body;
      const newProduct = yield service.create(body);
      res.status(201).json(newProduct);
    } catch (err) {
      next(err);
    }
  })
);
router.get('/:id', [(0, middlewares_1.validatorHandler)(product_schema_1.getProductSchema, 'params')], (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      const product = yield service.findOne(id);
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  })
);
router.patch(
  '/:id',
  (0, middlewares_1.validatorHandler)(product_schema_1.updateProductSchema, 'params'),
  (0, middlewares_1.validatorHandler)(product_schema_1.updateProductSchema, 'body'),
  (req, res, next) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const { id } = req.params;
        const body = req.body;
        const product = yield service.update(id, body);
        res.json(product);
      } catch (error) {
        next(error);
      }
    })
);
router.delete('/:id', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield service.delete(id);
    res.json(product);
  })
);
exports.default = router;
