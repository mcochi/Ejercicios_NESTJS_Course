import * as mongoose from 'mongoose';

export const Type1Schema = new mongoose.Schema({
  /*titulo: String,
  autor: String,
  fecha: String*/
  type: Number,
  ccm2Id:Number,
  cftId:Number,
  identifier: String,
  title: String,
  deadlineDatesLong: [],
  url: String,
  status: {
      id:String,
      abbreviation:String,
      description:String
  }
}
)