import { Injectable } from '@nestjs/common';
import {Libro} from '../libro/libro'
//import { LibroSinId } from './libro-sin-id'

@Injectable()
export class RestService {
  public libros: Libro [] = [];

  constructor() {
    this.libros = [];
  }
  getData(): Libro[] {
    return this.libros;
  }

  addLibro(libro : Libro) {
    this.libros.push(libro);
  }
}
