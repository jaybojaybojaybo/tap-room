import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Keg } from '../keg';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-keg-search',
  templateUrl: './keg-search.component.html',
  styleUrls: [ './keg-search.component.css' ]
})
export class KegSearchComponent implements OnInit {
  kegs$: Observable<Keg[]>;
  private searchTerms = new Subject<string>();

  constructor(private kegService: KegService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.kegs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.kegService.searchKegs(term)),
    );
  }
}
