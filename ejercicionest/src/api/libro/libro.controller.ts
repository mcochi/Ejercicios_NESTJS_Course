import { Controller, Get , Post, Body, Param, Put, Delete} from '@nestjs/common';
import {Libro} from './libro'
import { LibroSinId } from './libro-sin-id'
import { RestService } from '../rest/rest.service'; // Importamos el servicio para que lo pueda usar el controlador

@Controller('libro')
export class LibroController {

  private _id = 0;

  constructor(private readonly restservice: RestService) {} //Hacemos la inyeccción de dependiencia para que pueda llegar al servicio

  @Get() //Listado de libros. Devuelve un array de libros
  async findAll(): Promise<LibroSinId[]> {
    return this.restservice.findAll();
  }
  /*findAll(): Libro[] {
    return this.restservice.getData();
  }*/

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

  @Get('/:id')//Obtener un libro devuelve un libros
  getById(@Param() params): Libro {
    // Capturar e id y consultar a la BBDD
    const libroconsultado = new Libro();
    libroconsultado.id = params.id;
    libroconsultado.titulo = 'La sombra del viento';
    libroconsultado.autor = 'Carlos Ruiz Zafón';
    libroconsultado.fecha= '20-04-2007';
    return libroconsultado;
  }

  @Put('/:id') // modificar un objeto, devuelve el objeto
  modifyById(@Param() params,
             @Body() updateDto: LibroSinId): Libro {
    // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
    const LibroaModificar = new Libro();
    LibroaModificar.id = params.id;
    LibroaModificar.titulo = updateDto.titulo;
    LibroaModificar.autor = updateDto.autor;
    LibroaModificar.fecha = updateDto.fecha;
    return LibroaModificar;
  }

  @Delete('/:id') // borrar
  deleteById(@Param() params): Libro {
    // coger el id consultar a la bbdd y luego borrar el objeto
    const LibroaBorrar = new Libro();
    LibroaBorrar.id = params.id;
    LibroaBorrar.titulo = 'Un artista del mundo flotante';
    LibroaBorrar.autor = 'Kazuo Ishiguro';
    LibroaBorrar.fecha = '20-06-2016'
    return LibroaBorrar;
  }

}
