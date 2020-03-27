import { Injectable } from '@nestjs/common';
import {Libro} from '../libro/libro'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LibroSinId } from '../libro/libro-sin-id'

@Injectable()
export class RestService {
  private libros: Libro[];
  constructor(@InjectModel('Libro') private readonly modelo: Model<LibroSinId>) {
    this.libros = [];
  }

  async findAll() : Promise<LibroSinId[]> {
    return await this.modelo.find().exec();
  }

  async insertDoc(document : LibroSinId) : Promise<LibroSinId> {
    const createdLibro = new this.modelo(document);
    return await createdLibro.save();
  }

  getData(): Libro[] {
    return this.libros;
  }

  addLibro(libro : Libro) {
    this.libros.push(libro);
  }
  async findById(id: string):Promise<LibroSinId> {
    return await this.modelo.findById(id);
  }

  async updateById(id:string, libro: LibroSinId) : Promise<LibroSinId> {
    const cambios = {titulo: libro.titulo, autor: libro.autor, fecha: libro.fecha};
    await this.modelo.updateOne({_id:id}, cambios);
    return await this.modelo.findById(id);
  }

  async delete(id: string): Promise<LibroSinId> {
    const libroaborrar = await this.modelo.findById(id);
    await this.modelo.findOneAndRemove({_id:id});
    return libroaborrar;
  }
}
