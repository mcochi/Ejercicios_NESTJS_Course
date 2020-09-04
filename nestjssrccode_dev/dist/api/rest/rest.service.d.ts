import { Model } from 'mongoose';
import { LibroSinId } from '../libro/libro-sin-id';
export declare class RestService {
    private readonly modelo;
    private libros;
    constructor(modelo: Model<LibroSinId>);
    findAll(): Promise<LibroSinId[]>;
}
