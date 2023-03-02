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
  usernameInput = '';
  typeSelected = '';
  raceSelected = '';
  healthInput = 0;
  strengthInput = 0;
  intelligenceInput = 0;
  constitutionInput = 0;
  wisdomInput = 0;
  dexterityInput = 0

  get isPlayerValid(): boolean {
    return !!this.usernameInput && !!this.typeSelected && !!this.raceSelected && !!this.healthInput && !!this.strengthInput && !!this.intelligenceInput && !!this.constitutionInput && !!this.wisdomInput && !!this.dexterityInput
  };

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
    this.isJoinView = true;
    // TODO
  }

  join() {

  }

  back() {
    this.isCreateView = false;
    this.isJoinView = false;
  }
}
