import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAutGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // POST /login
  @UseGuards(LocalAutGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged in!' }; // TODO: return jwt access token
  }

  // GET /protected
  @Get('protected')
  getHello(@Request() req): string { // TODO: require an Bearer token, validate token
    return req.user;
  }
}
