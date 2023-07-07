import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {HugeModelService} from "../huge-model.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})
export class SmallComponent implements OnInit {





  constructor(public hugeModelService: HugeModelService) {

  }

  ngOnInit(): void {

  }



}
