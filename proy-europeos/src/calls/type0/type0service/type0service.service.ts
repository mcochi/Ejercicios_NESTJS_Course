import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Type0obj } from '../type0obj';


@Injectable()
export class Type0serviceService {
    constructor(@InjectModel('Type0') private readonly modelo: Model<Type0obj>) {}
    async findAll(): Promise<Type0obj[]> {
        return await this.modelo.find({'status.description':'Open'}, '_id cftId contractingAuthority url descriptionTender type  identifier title status deadlineDatesLong').exec();
    }
    async create(call: Type0obj): Promise<Type0obj> {
        const createdcall = new this.modelo(call);
        return await createdcall.save();
        }
}


