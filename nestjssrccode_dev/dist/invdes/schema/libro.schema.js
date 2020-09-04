"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.LibroSchema = new mongoose.Schema({
    region: String,
    year: Number,
    GastosinternosTotal: Number,
    "Gastosinternos(\%)Total": Number,
    "PersonalEJCTotal": Number,
    "PersonalEJCMujeresTotal": Number,
    "InvestigadoresEJCTotal": Number,
    "InvestigadoresEJCMujeresTotal": Number,
    "GastosinternosEmp": Number,
    "Gastosinternos(%)Emp": Number,
    "PersonalEJCEmp": Number,
    "PersonalEJCMujeresEmp": Number,
    "InvestigadoresEJCEmp": Number,
    "InvestigadoresEJCMujeresEmp": Number,
    "GastosinternosAdPub": Number,
    "Gastosinternos(%)AdPub": Number,
    "PersonalEJCAdPub": Number,
    "PersonalEJCMujeresAdPub": Number,
    "InvestigadoresEJCAdPub": Number,
    "InvestigadoresEJCMujeresAdPub": Number,
    "GastosinternosEnsSup": Number,
    "Gastosinternos(%)EnsSup": Number,
    "PersonalEJCEnsSup": Number,
    "PersonalEJCMujeresEnsSup": Number,
    "InvestigadoresEJCEnsSup": Number,
    "InvestigadoresEJCMujeresEnsSup": Number,
    "GastosinternosIPSFL": Number,
    "Gastosinternos(%)IPSFL": Number,
    "PersonalEJCIPSFL": Number,
    "PersonalEJCMujeresIPSFL": Number,
    "InvestigadoresEJCIPSFL": Number,
    "InvestigadoresEJCMujeresIPSFL": Number,
    "PIBAutonomico": Number
});
//# sourceMappingURL=libro.schema.js.map