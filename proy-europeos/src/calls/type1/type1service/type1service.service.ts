import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Type1obj } from '../type1obj';


@Injectable()
export class Type1serviceService {
    constructor(@InjectModel('Type1') private readonly modelo: Model<Type1obj>) {}
    async findAll(): Promise<Type1obj[]> {
        return await this.modelo.find({'status.description':'Open'}, '_id type  identifier title status deadlineDatesLong tags').exec();
    }
    /*
    async create(call: Type1obj): Promise<Type1obj> {
        const createdcall = new this.modelo(call);
        return await createdcall.save();
    }*/
}
