import * as mongoose from 'mongoose';

export const Type0Schema = new mongoose.Schema({
  /*titulo: String,
  autor: String,
  fecha: String*/
  index: Number,
  year:String,
  trimestre:String,
  region: [],
  PIB:Number,
  VABAgricultura:Number,
  '%VABAgricultura':Number,
  VABIndustria:Number,
}
)