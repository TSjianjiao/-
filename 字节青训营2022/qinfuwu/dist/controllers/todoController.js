"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoService_1 = __importDefault(require("../services/todoService"));
/**
 * TodoController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * 包含待办事项的增删改查功能
 */
class TodoController {
    /**
     * 列出所有待办事项
     * 响应格式
     * {
     *   list: [todo1, todo2]
     * }
     * @param ctx Koa 的上下文参数
     */
    listAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield todoService_1.default.listAll();
            ctx.body = { list };
        });
    }
    /**
     * 创建一条待办事项
     * 响应格式
     * {
     *   result: newTodo
     * }
     * @param ctx Koa 的上下文参数
     */
    create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, done = false } = ctx.request.body;
            const result = yield todoService_1.default.create({ title, done });
            ctx.body = { result };
        });
    }
    /**
     * 删除一条待办事项
     * 响应格式
     * {
     *   ok: true
     * }
     * @param ctx Koa 的上下文参数
     */
    delete(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield todoService_1.default.delete(ctx.params.id);
            ctx.body = { ok: true };
        });
    }
    /**
     * 删除所有待办事项
     * 响应格式
     * {
     *   ok: true
     * }
     * @param ctx Koa 的上下文参数
     */
    deleteAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield todoService_1.default.deleteAll();
            ctx.body = { ok: true };
        });
    }
    /**
     * 将一条待办事项状态设为 done
     * 响应格式
     * {
     *   ok: true
     * }
     * @param ctx Koa 的上下文参数
     */
    done(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield todoService_1.default.update(ctx.params.id, { done: true });
            ctx.body = { ok: true };
        });
    }
    /**
     * 将一条待办事项状态设为 undone
     * 响应格式
     * {
     *   ok: true
     * }
     * @param ctx Koa 的上下文参数
     */
    undone(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield todoService_1.default.update(ctx.params.id, { done: false });
            ctx.body = { ok: true };
        });
    }
}
// 导出 Controller 的实例
exports.default = new TodoController();
