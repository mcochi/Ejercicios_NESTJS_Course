import * as mongoose from 'mongoose';

export const LibroSchema = new mongoose.Schema({
  region: String,
  year: Number,
  GastoBioTotal: Number,
  PersBioTotal: Number,
  InvBioTotal: Number,
  GastoBioEmp: Number,
  PersBioEmp: Number,
  InvBioEmp: Number
})
