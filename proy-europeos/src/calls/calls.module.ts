import { Module } from '@nestjs/common';
import { Type0Controller } from './type0/type0.controller';
import { Type1Controller } from './type1/type1.controller';
import { Type0serviceService} from './type0/type0service/type0service.service'
import { Type1serviceService} from './type1/type1service/type1service.service'
import { Type0Schema } from './type0/schema/type0.schema'
import { Type1Schema} from './type1/schema/type1.schema'
import { LoraSchema } from './lora/schema/lora.schema'
import { MongooseModule } from '@nestjs/mongoose';
import { LoraController } from './lora/lora.controller';
import { LoraService } from './lora/lora/lora.service';
@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: 'region',
                schema: Type0Schema 
            },
            {
                name: 'Type1',
                schema: Type1Schema 
            },
            {
                name: 'coordinate',
                schema: LoraSchema
            }
        ]),
    ] ,
    providers: [
        Type0serviceService,
        Type1serviceService,
        LoraService,

    ],
    controllers: [
        Type0Controller,
        Type1Controller,
        LoraController
    ],

})
export class CallsModule {}
