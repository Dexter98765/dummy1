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
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
require("mocha");
chai_1.default.use(chai_http_1.default);
const expect = chai_1.default.expect;
describe('Routes Test', () => {
    it('should always pass', function () {
        expect(true).to.equal(true);
    });
    it('POST api test', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield chai_1.default.request('http://localhost:8000/users/').post('/create').send({ firstName: "firstname", lastName: "lastName", age: 28 });
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).not.to.be.empty;
            expect(res.body.data).to.be.empty;
            expect(res.body.data).to.be.an("object");
        });
    });
    it('PUT api test', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield chai_1.default.request('http://localhost:8000/users/').put('/update/15').send({ firstName: "firstname", lastName: "lastName", age: 28 });
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).not.to.be.empty;
            expect(res.body.data).to.be.empty;
            expect(res.body.data).to.be.an("object");
        });
    });
    it('DELETE api test', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield chai_1.default.request('http://localhost:8000/users/').delete('/delete/15');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).not.to.be.empty;
            expect(res.body.data).to.be.empty;
            expect(res.body.data).to.be.an("object");
        });
    });
    it('GET api test', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield chai_1.default.request('http://localhost:8000/users/').get('/getUsers/0');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).not.to.be.empty;
            expect(res.body.data).not.to.be.empty;
            expect(res.body.data).to.be.an("array");
        });
    });
});
