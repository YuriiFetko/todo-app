import {Component, OnInit} from '@angular/core';
import {from, interval, Observable, range, timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'test';

  ngOnInit(): void {

  }
}
