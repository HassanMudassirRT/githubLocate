import { Component, input } from '@angular/core';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-error-message',
  imports: [MessageModule],
  templateUrl: './error-message.html',
  
})
export class ErrorMessage {
  message = input.required<string>();
}
