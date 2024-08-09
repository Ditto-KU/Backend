import { Controller, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('shop')
export class ShopController {
  constructor(@Inject('KAFKA') private client: ClientKafka) {}
}
