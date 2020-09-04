import { LibroSinId } from './libro-sin-id';
import { SriService } from './sri/sri.service';
export declare class SriController {
    private readonly restservice;
    private _id;
    constructor(restservice: SriService);
    findAll(): Promise<LibroSinId[]>;
}
