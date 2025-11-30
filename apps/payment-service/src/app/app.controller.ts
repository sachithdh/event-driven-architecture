import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { NOTIFICATION_CLIENT } from '../constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject(NOTIFICATION_CLIENT) private readonly notificationClient: ClientProxy
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern("process-payment")
  handleProcessPayment(@Payload() order: any){
    console.log("[Payment service] Payment is process ", order);
    this.notificationClient.emit("payment-succeed", order);
    
  }
}
