import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KEGS } from '../mock-kegs'

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {

  kegs = KEGS;

  selectedKeg: Keg;

  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }

  constructor() { }

  ngOnInit() {
  }

}
