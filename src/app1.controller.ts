import { Controller, Get } from '@nestjs/common';

@Controller('/api/projects')
export class App1Controller {
  @Get('/:projectId')
  getProject(): string {
    return '/api/projects/:projectId';
  }
}
