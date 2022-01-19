"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router = router_1.default({
    prefix: '/api/todo'
});
const todoController_1 = __importDefault(require("../controllers/todoController"));
// 组装路由
router.put('/:id/done', todoController_1.default.done);
router.put('/:id/undone', todoController_1.default.undone);
router.get('/', todoController_1.default.listAll);
router.post('/', todoController_1.default.create);
router.delete('/:id', todoController_1.default.delete);
router.delete('/', todoController_1.default.deleteAll);
// Koa 的路由需要调用 routes 函数获取实际用于 use 的函数
exports.default = router.routes();
