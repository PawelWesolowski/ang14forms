import {Component, OnDestroy, OnInit} from '@angular/core';
import {HugeModelService} from "./huge-model.service";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'ang14forms';

  twoDigit = new FormControl(this.hugeModelService.mainModel?.small?.twoDigitNumber);
  email = new FormControl(this.hugeModelService.mainModel?.small?.email);
  private subscriptions = new Subscription();

  constructor(public hugeModelService: HugeModelService) {

  }

  ngOnInit(): void {

    this.subscriptions.add(this.hugeModelService.getSmallModel$().subscribe(value => {
      console.log("obs value changed:", value);
      this.twoDigit.setValue(value?.twoDigitNumber);
      this.email.setValue(value?.email);
    }));

    this.subscriptions.add(this.twoDigit.valueChanges.subscribe(value => {
      if(this.hugeModelService.mainModel?.small?.twoDigitNumber){
        console.log("form twodigit value changed:", value);
        this.hugeModelService.mainModel.small.twoDigitNumber = value;
      }
    }));


    this.subscriptions.add(this.email.valueChanges.subscribe(value => {
      if(this.hugeModelService.mainModel?.small?.email){
        console.log("form email value changed:", value);
        this.hugeModelService.mainModel.small.email = value;
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
