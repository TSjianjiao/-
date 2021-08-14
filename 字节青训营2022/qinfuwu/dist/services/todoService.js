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
const todoTable_1 = __importDefault(require("../models/todoTable"));
const api_1 = __importDefault(require("@byteinspire/api"));
const ObjectId = api_1.default.db.ObjectId;
/**

 * TodoService

 * Service 是业务具体实现，由 Controller 或其它 Service 调用

 * 包含待办事项的增删改查功能

 */
class TodoService {
    /**
  
     * 列出所有待办事项
  
     * @return {Promise<Array<any>>} 返回待办事项数组
  
     */
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const all = yield todoTable_1.default.where().find();
            return all;
        });
    }
    /**
  
     * 创建一条待办事项
  
     * @param todo 用于创建待办事项的数据，原样存进数据库
  
     * @return {Promise<any>} 返回实际插入数据库的数据，会增加_id，createdAt和updatedAt字段
  
     */
    create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todoTable_1.default.save(todo);
        });
    }
    /**
  
     * 删除一条待办事项
  
     * @param id 待办事项的 _id
  
     * 若不存在，则抛出 404 错误
  
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield todoTable_1.default.where({ _id: ObjectId(id) }).delete();
            if (result.deletedCount === 0) {
                const error = new Error(`todo:${id} not found`);
                error.status = 404;
                throw error;
            }
        });
    }
    /**
  
     * 删除所有待办事项
  
     */
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield todoTable_1.default.where().delete();
        });
    }
    /**
  
     * 更新一条待办事项
  
     * @param id 待办事项的 _id
  
     * @param updater 将会用原对象 merge 此对象进行更新
  
     * 若不存在，则抛出 404 错误
  
     */
    update(id, updater) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield todoTable_1.default.where({ _id: ObjectId(id) }).findOne();
            if (!todo) {
                const error = new Error(`todo:${id} not found`);
                error.status = 404;
                throw error;
            }
            Object.assign(todo, updater);
            yield todoTable_1.default.save(todo);
        });
    }
}
// 导出 Service 的实例
exports.default = new TodoService();
