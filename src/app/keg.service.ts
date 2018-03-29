import { Injectable } from '@angular/core';
import { Keg } from './keg';
import { KEGS } from './mock-kegs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class KegService {

  getKegs(): Observable<Keg[]> {
    this.messageService.add('KegService: fetched kegs');
    return of(KEGS);
  }

  constructor(private messageService: MessageService) { }

}
