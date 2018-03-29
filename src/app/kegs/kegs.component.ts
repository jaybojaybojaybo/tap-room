import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {

  selectedKeg: Keg;

  kegs: Keg[];

  constructor(private kegService: KegService) { }

  ngOnInit() {
    this.getKegs();
  }

  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }

  getKegs(): void {
    this.kegService.getKegs()
      .subscribe(kegs => this.kegs = kegs);
  }


}
