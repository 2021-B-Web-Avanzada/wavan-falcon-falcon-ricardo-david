"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equiposControllers_1 = __importDefault(require("../controllers/equiposControllers"));
class EquiposRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', equiposControllers_1.default.listarEquipos);
        this.router.get('/:id', equiposControllers_1.default.listarUnEquipo);
        this.router.post('/', equiposControllers_1.default.crearEquipo);
        this.router.put('/:id', equiposControllers_1.default.actualizarEquipo);
        this.router.delete('/:id', equiposControllers_1.default.eliminarEquipo);
    }
}
const equiposRoutes = new EquiposRoutes();
exports.default = equiposRoutes.router;
