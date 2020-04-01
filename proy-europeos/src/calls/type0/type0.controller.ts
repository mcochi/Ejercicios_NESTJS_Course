import { Controller, Body, Get, Post } from '@nestjs/common';
import { Type0obj } from './type0obj';
import { Type0serviceService } from './type0service/type0service.service';




@Controller('type0')
export class Type0Controller {
    constructor(private readonly mongoService: Type0serviceService) {}
    @Get()
    async findAll(): Promise<Type0obj[]> {
        return this.mongoService.findAll();
    }

    @Post()
    async create(@Body() call: Type0obj): Promise<Type0obj> {
    const callD = await this.mongoService.create(call);
    return callD;
}
}
