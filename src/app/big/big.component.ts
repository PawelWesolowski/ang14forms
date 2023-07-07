import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HugeModelService} from "../huge-model.service";

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigComponent implements OnInit {

  constructor(public hugeModelService: HugeModelService) { }

  ngOnInit(): void {
  }

}
