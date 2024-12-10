import { Controller, Get } from '@nestjs/common';

@Controller('/api/projects/subscriptions')
export class AppController {
  @Get()
  getSubscriptions() {
    return '/api/projects/subscriptions';
  }
}
