import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import {MongooseModule} from '@nestjs/mongoose';
//import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ApiModule,
  MongooseModule.forRoot('mongodb://localhost:27017/exampledb',{ useNewUrlParser: true, useUnifiedTopology: true }),
  AuthModule,
  UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
