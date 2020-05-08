import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Loraobj } from '../Loraobj';


@Injectable()
export class LoraService {
    constructor(@InjectModel('coordinate') private readonly modelo: Model<Loraobj>) {}
    
    async findAll(): Promise<Loraobj[]> {
        return await this.modelo.find().limit(2).exec();
    }
    async create(call: Loraobj): Promise<Loraobj> {
        const createdcall = new this.modelo(call);
        return await createdcall.save();
        }
}
