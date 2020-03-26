import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { RestService } from './rest/rest.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './schema/libro.schema';



@Module({
  controllers: [LibroController],
  providers: [RestService],
  imports: [
      MongooseModule.forFeature([{
        name: 'Libro',
        schema: LibroSchema }])],
})
export class ApiModule {}
