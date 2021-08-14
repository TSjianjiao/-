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
const koa_static_1 = __importDefault(require("koa-static"));
const koa_body_1 = __importDefault(require("koa-body"));
const path_1 = __importDefault(require("path"));
const todo_1 = __importDefault(require("./routers/todo"));
const Koa = require('koa');
const app = new Koa();
// 为应用使用中间件
// 静态文件中间件
app.use(koa_static_1.default(path_1.default.join(__dirname, '../public')));
// 请求体 parse 中间件，用于 parse json 格式请求体
app.use(koa_body_1.default());
/** 若后面的路由抛错，则封装为错误响应返回
 * 错误响应格式为
 * {
 *   error: message
 * }
 */
app.use(function errorHandler(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield next();
        }
        catch (err) {
            // 抛出的错误可以附带 status 字段，代表 http 状态码
            // 若没有提供，则默认状态码为 500，代表服务器内部错误
            ctx.status = err.status || 500;
            ctx.body = { error: err.message };
        }
    });
});
// 为应用使用路由定义
// 使用待办事项业务路由
app.use(todo_1.default);
exports.default = app;
