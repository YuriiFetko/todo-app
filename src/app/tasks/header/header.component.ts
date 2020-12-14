import {Component, OnInit} from '@angular/core';
import {TaskService} from "../shared/task.service";
import {Task} from "../shared/task.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
