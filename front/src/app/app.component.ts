import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloReply, HelloRequest } from '../generated/temp_pb';
import { ServiceError, TemperClient } from '../generated/temp_pb_service';
import { Answer } from './anser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  answer: string = "";
  answerRest: string = "";
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const client = new TemperClient("https://localhost:7010", {

    });
    const message = new HelloRequest();
    message.setName("Алексей");
    for (let a = 1; a <= 10; a++) {
      client.sayHello2(message, (err: ServiceError | null, response: HelloReply | null) => {
        this.answer = response?.getMessage() ?? "";
      });
      this.http.post("https://localhost:7010/api/Values", {
        name: "Алексей"
      })
        .subscribe(data => {
          this.answerRest = (data as Answer).name;
        });
    }
  }

  title = 'front';

}
