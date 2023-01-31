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
const faker_1 = require('@faker-js/faker');
const boom_1 = __importDefault(require('@hapi/boom'));
// import getConnection from '../dist/postgres.conection';
const postgress_poolConection_1 = __importDefault(require('../dist/postgress.poolConection'));
class ProductsService {
  constructor() {
    this.products = [];
    //this.generate();
    this.pool = postgress_poolConection_1.default;
    this.pool.on('error', (err) => console.error(err));
  }
  generate() {
    return __awaiter(this, void 0, void 0, function* () {
      const limit = 100;
      for (let index = 0; index < limit; index++) {
        const newProduct = {
          id: faker_1.faker.datatype.uuid(),
          name: faker_1.faker.commerce.productName(),
          price: parseInt(faker_1.faker.commerce.price(), 10),
          image: faker_1.faker.image.imageUrl(),
          isBlock: faker_1.faker.datatype.boolean(),
        };
        this.products.push(newProduct);
      }
    });
  }
  create(data) {
    return __awaiter(this, void 0, void 0, function* () {
      const newProduct = Object.assign({ id: faker_1.faker.datatype.uuid() }, data);
      this.products.push(newProduct);
      return newProduct;
    });
  }
  find() {
    return __awaiter(this, void 0, void 0, function* () {
      // const client = await getConnection();
      const query = 'SELECT * FROM products';
      const rta = yield this.pool.query(query);
      return rta.rows;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.products);
        }, 1000);
      });
    });
  }
  findOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const product = this.products.find((item) => item.id === id);
      if (!product) {
        throw boom_1.default.notFound('product not found');
      }
      if (product.isBlock) {
        throw boom_1.default.conflict('product is block');
      }
      return product;
    });
  }
  update(id, changes) {
    return __awaiter(this, void 0, void 0, function* () {
      console.log('🚀 ~ file: products.service.ts:50 ~ ProductsService ~ update ~ changes', changes);
      const index = this.products.findIndex((item) => item.id === id);
      if (index === -1) {
        throw boom_1.default.notFound('Product not found');
      }
      const product = this.products[index];
      this.products[index] = Object.assign(Object.assign({}, this.products[index]), changes);
      return this.products[index];
    });
  }
  delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
      const index = this.products.findIndex((item) => item.id === id);
      if (index === -1) {
        throw new Error('product not found');
      }
      this.products.splice(index, 1);
      return { id };
    });
  }
}
exports.default = ProductsService;
