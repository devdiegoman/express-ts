'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const router = express_1.default.Router();
/*
    Categories
*/
router.get('/', (req, res) => {
  res.json({});
});
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});
exports.default = router;
