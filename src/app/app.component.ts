import { Component } from '@angular/core';
import {HugeModelService} from "./huge-model.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang14forms';

  constructor(public hugeModelService: HugeModelService) {

  }

}
