import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_CLIENT, PAYMENT_CLIENT } from '../constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(PAYMENT_CLIENT) private readonly paymentRMQClient: ClientProxy,
    @Inject(NOTIFICATION_CLIENT) private readonly notificationRMQClient: ClientProxy,
  ) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern("order-created")
  handleOrderCreated(@Payload() order: any){
    console.log("[Order-Service]: Receive new order: ", order);
    this.paymentRMQClient.emit("process-payment", order);
    this.notificationRMQClient.emit("order-created", order);
    
  }
}
