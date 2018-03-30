import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Keg } from '../keg';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-keg-detail',
  templateUrl: './keg-detail.component.html',
  styleUrls: ['./keg-detail.component.css']
})
export class KegDetailComponent implements OnInit {
  @Input() keg: Keg;

  constructor(
    private route: ActivatedRoute,
    private kegService: KegService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getKeg();
  }

  getKeg(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kegService.getKeg(id)
      .subscribe(keg => this.keg = keg);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.kegService.updateKeg(this.keg)
      .subscribe(() => this.goBack());
  }

}
