import { Controller, Get , Post, Body, Param, Put, Delete, UseGuards} from '@nestjs/common';
import {Libro} from './libro'
import { LibroSinId } from './libro-sin-id'
import { SriService } from '../rest/sri.service'; // Importamos el servicio para que lo pueda usar el controlador
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('bio')
export class SriController {

  private _id = 0;

  constructor(private readonly restservice: SriService) {} //Hacemos la inyeccción de dependiencia para que pueda llegar al servicio

  @UseGuards(JwtAuthGuard)
  @Get() //Listado de libros. Devuelve un array de libros
  async findAll(): Promise<LibroSinId[]> {
    return this.restservice.findAll();
  }
  /*findAll(): Libro[] {
    return this.restservice.getData();
  }*/
  /*
  @UseGuards(JwtAuthGuard)
  @Post() // Añadir un libro, devuelvo un libro
  //El createlibro es el nombre que le doy al payload que me mandan
  async addOne(@Body() createlibro : LibroSinId) : Promise<LibroSinId> {
    const libroID = await this.restservice.insertDoc(createlibro);
    return libroID;
  }
    /*const devuelvolibro = new Libro();
    devuelvolibro.id = this._id;
    devuelvolibro.titulo = createlibro.titulo;
    devuelvolibro.autor = createlibro.autor;
    devuelvolibro.fecha = createlibro.fecha;
    this.restservice.addLibro(devuelvolibro);
    this._id++;
    return devuelvolibro;
  }*/
  /*
  @UseGuards(JwtAuthGuard)
  @Get('/:_id')//Obtener un libro devuelve un libros
  getById(@Param() params): Promise<LibroSinId> {
    // Capturar e id y consultar a la BBDD
    /*const libroconsultado = new Libro();
    libroconsultado.id = params.id;
    libroconsultado.titulo = 'La sombra del viento';
    libroconsultado.autor = 'Carlos Ruiz Zafón';
    libroconsultado.fecha= '20-04-2007';
    return libroconsultado;
  }
  return this.restservice.findById(params._id);
}*/
/*
  @UseGuards(JwtAuthGuard)
  @Put('/:_id') // modificar un objeto, devuelve el objeto
  async update(@Param() params, @Body() updateDto: LibroSinId): Promise<LibroSinId> {
  /*modifyById(@Param() params,
             @Body() updateDto: LibroSinId): Libro {
    // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
    const LibroaModificar = new Libro();
    LibroaModificar.id = params.id;
    LibroaModificar.titulo = updateDto.titulo;
    LibroaModificar.autor = updateDto.autor;
    LibroaModificar.fecha = updateDto.fecha;
    return LibroaModificar;
  }
      return this.restservice.updateById(params._id,updateDto);
  }
  */
  /*
  @UseGuards(JwtAuthGuard)
  @Delete('/:_id') // borrar
  remove (@Param() params): Promise<LibroSinId> {
    return this.restservice.delete(params._id);
  }
  /*deleteById(@Param() params): Libro {
    // coger el id consultar a la bbdd y luego borrar el objeto
    const LibroaBorrar = new Libro();
    LibroaBorrar.id = params.id;
    LibroaBorrar.titulo = 'Un artista del mundo flotante';
    LibroaBorrar.autor = 'Kazuo Ishiguro';
    LibroaBorrar.fecha = '20-06-2016'
    return LibroaBorrar;
  }*/
  

}
