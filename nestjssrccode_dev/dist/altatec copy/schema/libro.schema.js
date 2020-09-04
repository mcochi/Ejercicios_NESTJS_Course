"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LibroSchema = new mongoose.Schema({
    region: String,
    year: Number,
    GastoIDManAltayMediaTec: Number,
    GastoIDSerAltTec: Number,
    PersIDManAltayMediaTec: Number,
    PersIDServAltTec: Number,
    GastoIDTotal: Number,
    PersIDTotal: Number
});
//# sourceMappingURL=libro.schema.js.map