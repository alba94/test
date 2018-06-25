import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  list: string[] = ['Step1', 'Step2', 'Step3', 'Step4'];
  status: string;

  constructor() { }

  ngOnInit() {
  }

}
