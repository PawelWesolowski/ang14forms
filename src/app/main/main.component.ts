import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { HugeModelService } from '../huge-model.service';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(public hugeModelService: HugeModelService) { }

}
