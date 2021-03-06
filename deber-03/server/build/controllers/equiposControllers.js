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
const database_1 = __importDefault(require("../database"));
class EquiposController {
    listarEquipos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const equipos = yield database_1.default.query('SELECT * FROM equipo');
            res.json(equipos);
        });
    }
    listarUnEquipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const equipos = yield database_1.default.query('SELECT * FROM equipo WHERE id_equipo = ?', [id]);
            if (equipos.length > 0) {
                return res.json(equipos[0]);
            }
            res.status(404).json({ text: "El equipo no existe" });
        });
    }
    crearEquipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO equipo set ?', [req.body]);
            res.json({ message: 'Equipo guardado' });
        });
    }
    actualizarEquipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE equipo set ? WHERE id_equipo = ?', [req.body, id]);
            res.json({ message: 'El equipo fue actualizado' });
        });
    }
    eliminarEquipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM equipo WHERE id_equipo = ?', [id]);
            res.json({ message: 'El equipo fue eliminado' });
        });
    }
}
const equiposController = new EquiposController();
exports.default = equiposController;
