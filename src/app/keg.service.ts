import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Keg } from './keg';
import { KEGS } from './mock-kegs';
import { MessageService } from './message.service';

@Injectable()
export class KegService {

  constructor(private messageService: MessageService) { }

  getKegs(): Observable<Keg[]> {
    this.messageService.add('KegService: fetched kegs');
    return of(KEGS);
  }

  getKeg(id: number): Observable<Keg> {
    this.messageService.add(`KegService: fetched keg id=${id}`);
    return of(KEGS.find(keg => keg.id === id));
  }

}
