import * as mongoose from 'mongoose';

export const LoraSchema = new mongoose.Schema({
  /*titulo: String,
  autor: String,
  fecha: String*/
  longitud: String,
  latitud: String,
  InsertedDate : Date,
},
{
  timestamps: true
}
)

 