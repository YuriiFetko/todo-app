import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(): void {
  }

  deleteTask(): void {
    this.delete.emit();
  }

}
