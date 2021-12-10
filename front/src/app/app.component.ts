import { Component, OnInit } from '@angular/core';
import { HelloReply, HelloRequest } from '../generated/temp_pb';
import { ServiceError, TemperClient } from '../generated/temp_pb_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  answer: string = "";
  ngOnInit(): void {
    const client = new TemperClient("https://localhost:7010");
    const message = new HelloRequest();
    message.setName("Алексей");
    client.sayHello2(message, (err: ServiceError | null, response: HelloReply | null) => {
      this.answer = response?.getMessage() ?? "";
    })
  }

  title = 'front';

}
