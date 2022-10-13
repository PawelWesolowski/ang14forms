import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HugeModelService} from "../huge-model.service";
@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})
export class SmallComponent implements OnInit {

  twoDigit = new FormControl(this.hugeModelService.mainModel?.small?.twoDigitNumber);
  email = new FormControl(this.hugeModelService.mainModel?.small?.email);

  constructor(public hugeModelService: HugeModelService) {
    this.hugeModelService.getSmallModel$().subscribe(value => {
      console.log("obs value changed:", value);
      this.twoDigit.setValue(value?.twoDigitNumber);
      this.email.setValue(value?.email);
    })

  }

  ngOnInit(): void {
    this.twoDigit.valueChanges.subscribe(value => {
      if(this.hugeModelService.mainModel?.small?.twoDigitNumber){
        console.log("value changed:", value);
        this.hugeModelService.mainModel.small.twoDigitNumber = value;
      }
    });


    this.email.valueChanges.subscribe(value => {
      if(this.hugeModelService.mainModel?.small?.twoDigitNumber){
        console.log("value changed:", value);
        this.hugeModelService.mainModel.small.email = value;
      }
    });
  }

}
