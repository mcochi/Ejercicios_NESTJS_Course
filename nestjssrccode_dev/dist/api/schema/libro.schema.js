"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LibroSchema = new mongoose.Schema({
    index: Number,
    year: String,
    trimestre: String,
    region: [],
    PIB: Number,
    VABAgricultura: Number,
    '%VABAgricultura': Number,
    VABIndustria: Number,
});
//# sourceMappingURL=libro.schema.js.map