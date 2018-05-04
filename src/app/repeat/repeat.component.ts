import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
