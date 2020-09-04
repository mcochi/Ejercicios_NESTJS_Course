import * as mongoose from 'mongoose';

export const LibroSchema = new mongoose.Schema({
  index: Number,
  year:String,
  trimestre:String,
  region: [],
  PIB:Number,
  VABAgricultura:Number,
  '%VABAgricultura':Number,
  VABIndustria:Number,
})
