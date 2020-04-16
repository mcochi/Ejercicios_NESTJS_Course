import { Module } from '@nestjs/common';
import { Type0Controller } from './type0/type0.controller';
import { Type1Controller } from './type1/type1.controller';
import { Type0serviceService} from './type0/type0service/type0service.service'
import { Type1serviceService} from './type1/type1service/type1service.service'
import { Type0Schema } from './type0/schema/type0.schema'
import { Type1Schema} from './type1/schema/type1.schema'

import { MongooseModule } from '@nestjs/mongoose';
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
            }
        ]),
    ] ,
    providers: [
        Type0serviceService,
        Type1serviceService
    ],
    controllers: [
        Type0Controller,
        Type1Controller
    ],

})
export class CallsModule {}
