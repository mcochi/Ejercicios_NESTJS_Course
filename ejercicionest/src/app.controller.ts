/*
* En este caso le estamos indicaando que queremos utilizar la estrategia
* local de la biblioteca passport y nos limitamos a devolver al usuarios
* que nos mandan
*/

import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guards'
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

//It launches LocalAuthGuard wich call Local Strategy which peforms logic authentification
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // Me he quedado en Default Strategy:
  // https://docs.nestjs.com/techniques/authentication
}
