import * as mongoose from 'mongoose';

export const LoraSchema = new mongoose.Schema({
  /*titulo: String,
  autor: String,
  fecha: String*/
  lumen: Number,
  presion: Number,
  InsertedDate : Date,
},
{
  timestamps: true
}
)