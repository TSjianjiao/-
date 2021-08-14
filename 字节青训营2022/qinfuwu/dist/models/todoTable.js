"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 使用 inspirecloud 调用轻服务功能
const api_1 = __importDefault(require("@byteinspire/api"));
// 使用轻服务 todo 表
// 若用户未创建，在发送第一条调用时会自动创建该表
const todoTable = api_1.default.db.table('todo');
// 导出 table 实例
exports.default = todoTable;
