import { Controller, Get } from '@nestjs/common';

@Controller('alerts')
export class AlertsController {
  @Get()
  findAll() {
    return [];
  }
}