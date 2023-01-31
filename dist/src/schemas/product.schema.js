'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require('joi'));
const id = joi_1.default.string().uuid();
const name = joi_1.default.string().alphanum().min(3).max(15);
const price = joi_1.default.number().integer().min(10);
const image = joi_1.default.string().uri();
exports.createProductSchema = joi_1.default.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});
exports.updateProductSchema = joi_1.default.object({
  name: name,
  price: price,
  image: image,
});
exports.getProductSchema = joi_1.default.object({
  id: id.required(),
});
