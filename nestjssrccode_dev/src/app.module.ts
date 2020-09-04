import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import {MongooseModule} from '@nestjs/mongoose';
//import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SriController } from './bio/libro/sri.controller';
import { SriModule } from './bio/sri.module'
import { SriService } from './bio/rest/sri.service';
import { AltatecModule } from './altatec/altatec.module'
import { InvdesModule } from './invdes/invdes.module'


@Module({
  imports: [
  SriModule,
  ApiModule,
  AltatecModule,
  InvdesModule,
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/Contabilidad_trimestral',{ useNewUrlParser: true, useUnifiedTopology: true }),
  AuthModule,
  UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
