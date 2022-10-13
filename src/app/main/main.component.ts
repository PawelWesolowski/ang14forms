import { Component, OnInit } from '@angular/core';
import { HugeModelService } from '../huge-model.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public hugeModelService: HugeModelService) { }

  ngOnInit(): void {
  }

  // create() {
  //   this.hugeModelService.createMain()
  // }
  //
  // createSmall() {
  //   this.hugeModelService.createSmall()
  // }
  //
  // createBig() {
  //   this.hugeModelService.createBig()
  // }
}
