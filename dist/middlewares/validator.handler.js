'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.validatorHandler = void 0;
const boom_1 = __importDefault(require('@hapi/boom'));
const validatorHandler = (schema, property) => {
  console.log('🚀 ~ ********************************file: validator.handler.ts:7 ~ validatorHandler ~ property', property);
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      console.log('****************************************************************');
      console.log('🚀 ~ file: validator.handler.ts:10 ~ return ~ error', error);
      next(boom_1.default.badRequest(error));
    }
    next();
  };
};
exports.validatorHandler = validatorHandler;
