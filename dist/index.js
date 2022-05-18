"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('tiny'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Hello!");
});
app.use('/users', users_1.default);
(0, typeorm_1.createConnection)().then(connection => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server Running here 👉 http://localhost:${PORT}`);
    });
}).catch(error => console.log(error));
exports.default = app;
