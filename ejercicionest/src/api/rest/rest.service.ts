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
}
