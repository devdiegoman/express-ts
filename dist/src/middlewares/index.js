'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.validatorHandler = exports.boomErrorHandler = exports.errorHandler = exports.logErrors = void 0;
const error_handler_1 = require('./error.handler');
Object.defineProperty(exports, 'logErrors', {
  enumerable: true,
  get: function () {
    return error_handler_1.logErrors;
  },
});
Object.defineProperty(exports, 'errorHandler', {
  enumerable: true,
  get: function () {
    return error_handler_1.errorHandler;
  },
});
Object.defineProperty(exports, 'boomErrorHandler', {
  enumerable: true,
  get: function () {
    return error_handler_1.boomErrorHandler;
  },
});
const validator_handler_1 = require('./validator.handler');
Object.defineProperty(exports, 'validatorHandler', {
  enumerable: true,
  get: function () {
    return validator_handler_1.validatorHandler;
  },
});
