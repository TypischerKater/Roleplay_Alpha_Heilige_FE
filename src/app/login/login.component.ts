import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isCreateView = false;
  isJoinView = false;
  gameId = '';
  gameIdInput = '';

  constructor(private httpClient: HttpClient) {
  }

  onCreate() {
    // TODO
    this.isCreateView = true;
    this.isJoinView = false;
    this.create$().subscribe((gameId) => {
      this.gameId = gameId;
      localStorage.setItem("gameId", gameId);
/*      const myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8080/websocket');
      myWebSocket.next()
      myWebSocket.subscribe((bla) => console.log(bla));*/
    })
  }

  create$(): Observable<string> {
    // TODO move to api service
    return this.httpClient.get<string>("http://localhost:8080/create");
  }

  onJoin() {
    // TODO
  }
}
