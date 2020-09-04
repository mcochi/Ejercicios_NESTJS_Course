import { Module } from '@nestjs/common';
import { SriController } from './libro/sri.controller';
import { SriService } from './rest/sri.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './schema/libro.schema';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';



@Module({
  controllers: [SriController],
  providers: [SriService],
  imports: [
      MongooseModule.forFeature([{
        collection:'invdes',
        name: 'invdes',
        schema: LibroSchema }]),
        AuthModule,
        UsersModule],// Podríamos añadir collection: '<Nombre de la colección', sino crea la colección nombre+s, en nuestro caso libro+s: libros
})
export class InvdesModule {}
