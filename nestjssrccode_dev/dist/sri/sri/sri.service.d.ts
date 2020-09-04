import { Model } from 'mongoose';
import { LibroSinId } from '../libro-sin-id';
export declare class SriService {
    private readonly modelo;
    private libros;
    constructor(modelo: Model<LibroSinId>);
    findAll(): Promise<LibroSinId[]>;
}
