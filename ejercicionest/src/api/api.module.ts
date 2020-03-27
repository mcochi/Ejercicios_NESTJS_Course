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
        schema: LibroSchema }])],// Podríamos añadir collection: '<Nombre de la colección', sino crea la colección nombre+s, en nuestro caso libro+s: libros
})
export class ApiModule {}
