import { LibroSinId } from './libro-sin-id';
import { RestService } from '../rest/rest.service';
export declare class LibroController {
    private readonly restservice;
    private _id;
    constructor(restservice: RestService);
    findAll(): Promise<LibroSinId[]>;
}
