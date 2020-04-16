import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { CallsModule } from './calls/calls.module';
import { ConfigModule } from '@nestjs/config';
//import configuration from './configuration';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Contabilidad_trimestral',{ useNewUrlParser: true, useUnifiedTopology: true }),
    CallsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
