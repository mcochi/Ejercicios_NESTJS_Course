import { Controller, Body, Get, Post } from '@nestjs/common';
import { Type1obj } from './type1obj';
import { Type1serviceService } from './type1service/type1service.service';




@Controller('type1')
export class Type1Controller {
    constructor(private readonly mongoService: Type1serviceService) {}
    
    @Get()
    async findAll(): Promise<Type1obj[]> {
        return this.mongoService.findAll();
    }
    /*
    @Post()
    async create(@Body() call: Type1obj): Promise<Type1obj> {
    const callD = await this.mongoService.create(call);
    return callD;
}*/
}
