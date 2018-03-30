import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const kegs = [
      { id: 11, name: 'Hazy...So Hot Right Now', brand: 'StormBreaker', price: 200, pintPrice: 6, abv: 12, pints: 124 },

      { id: 12, name: 'Pool Part! Extra Pale', brand: 'Culmination', price: 200, pintPrice: 6, abv: 12, pints: 124 },

      { id: 13, name: 'Doomtown', brand: 'Wayfinder', price: 200, pintPrice: 6, abv: 12, pints: 124},
    ];
    return {kegs};
  }
}
