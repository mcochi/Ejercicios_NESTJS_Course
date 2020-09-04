"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LibroSchema = new mongoose.Schema({
    region: String,
    year: Number,
    GastoBioTotal: Number,
    PersBioTotal: Number,
    InvBioTotal: Number,
    GastoBioEmp: Number,
    PersBioEmp: Number,
    InvBioEmp: Number
});
//# sourceMappingURL=libro.schema.js.map