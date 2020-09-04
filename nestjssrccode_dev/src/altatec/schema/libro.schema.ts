import * as mongoose from 'mongoose';

export const LibroSchema = new mongoose.Schema({
  region: String,
  year: Number,
  GastoIDManAltayMediaTec: Number,
  GastoIDSerAltTec: Number,
  PersIDManAltayMediaTec: Number,
  PersIDServAltTec: Number,
  GastoIDTotal: Number,
  PersIDTotal: Number
})
