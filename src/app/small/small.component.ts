import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})
export class SmallComponent implements OnInit {

  twoDigit = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
