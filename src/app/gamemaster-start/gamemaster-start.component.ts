import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gamemaster-start',
  templateUrl: './gamemaster-start.component.html',
  styleUrls: ['./gamemaster-start.component.css'],
})
export class GamemasterStartComponent {
  loading: boolean;
  // @ts-ignore
  map: string[][];

  constructor(private api: ApiService, private router: Router) {
    this.loading = true;
    this.getMap().subscribe((data) => {
      debugger;
      this.map = data;
      this.loading = false;
    });
  }

  getMap(): Observable<string[][]> {
    return this.api.getMap();
  }
}
