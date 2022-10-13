import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {HugeModelService} from "../huge-model.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})
export class SmallComponent implements OnInit, OnDestroy {

  twoDigit = new FormControl(this.hugeModelService.mainModel?.small?.twoDigitNumber);
  email = new FormControl(this.hugeModelService.mainModel?.small?.email);

  private subscriptions = new Subscription();

  constructor(public hugeModelService: HugeModelService) {
    this.subscriptions.add(this.hugeModelService.getSmallModel$().subscribe(value => {
      console.log("obs value changed:", value);
      this.twoDigit.setValue(value?.twoDigitNumber);
      this.email.setValue(value?.email);
    }));
  }

  ngOnInit(): void {
    this.subscriptions.add(this.twoDigit.valueChanges.subscribe(value => {
      if(this.hugeModelService.mainModel?.small?.twoDigitNumber){
        console.log("value changed:", value);
        this.hugeModelService.mainModel.small.twoDigitNumber = value;
      }
    }));


    this.subscriptions.add(this.email.valueChanges.subscribe(value => {
      if(this.hugeModelService.mainModel?.small?.twoDigitNumber){
        console.log("value changed:", value);
        this.hugeModelService.mainModel.small.email = value;
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
