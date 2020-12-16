import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  constructor() {
  }

  @Input() task: Task;
  @Output() toggleDone: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  toggle(): void {
    this.toggleDone.emit();
  }

}
