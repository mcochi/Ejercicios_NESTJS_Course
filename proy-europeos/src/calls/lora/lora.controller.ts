import { Controller, Body, Get, Post } from '@nestjs/common';
import { Loraobj } from './Loraobj';
import { LoraService } from './lora/lora.service';




@Controller('lora_poc')
export class LoraController {
    constructor(private readonly mongoService: LoraService) {}
    @Get()
    async findAll(): Promise<Loraobj[]> {
        return this.mongoService.findAll();
    }

    @Post()
    async create(@Body() call: Loraobj): Promise<Loraobj> {
    const callD = await this.mongoService.create(call);
    return callD;
}
}
