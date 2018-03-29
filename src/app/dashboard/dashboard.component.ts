import { Component, OnInit } from '@angular/core';
import { Keg } from '../keg';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  kegs: Keg[] = [];

  constructor(private kegService: KegService) { }

  ngOnInit() {
    this.getKegs();
  }

  getKegs(): void {
    this.kegService.getKegs()
      .subscribe(kegs => this.kegs = kegs.slice(0, 100));
  }
}
