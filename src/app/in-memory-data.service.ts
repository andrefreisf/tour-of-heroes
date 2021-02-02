import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Crisis } from './crisis';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // const names define the api urls
    const heroes = [
      { id: 11, name: 'Dr Nice', superpower: 'Controls ice', suitColor: 'lightblue' },
      { id: 12, name: 'Narco', superpower: 'Very fast', suitColor: 'black' },
      { id: 13, name: 'Bombasto', superpower: 'Explosions', suitColor: 'orange' },
      { id: 14, name: 'Celeritas', superpower: 'Super strength', suitColor: 'lightblue' },
      { id: 15, name: 'Magneta', superpower: 'Telekinesis', suitColor: 'yellow' },
      { id: 16, name: 'RubberMan', superpower: 'Elastic body', suitColor: 'rebeccapurple' },
      { id: 17, name: 'Dynama', superpower: 'Changes body size', suitColor: 'pink' },
      { id: 18, name: 'Dr IQ', superpower: 'Super smart', suitColor: 'white' },
      { id: 19, name: 'Magma', superpower: 'Controls lava', suitColor: 'red' },
      { id: 20, name: 'Tornado', superpower: 'Controls air', suitColor: 'lightgray' }
    ];
    const crises = [
      { id: 1, title: 'Dragon destroying city', img: 'https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/2b/56/2b/2b562b70-28a0-9802-9e0f-666e5ae0a9a2/source/200x200bb.jpg' },
      { id: 2, title: 'Godzilla and King Kong fighting again', img: 'https://www.giantfreakinrobot.com/wp-content/uploads/2020/11/godzilla-vs-kong2-edited-200x200.jpg' },
      { id: 3, title: 'Asteroid incoming', img: 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/450/2020/08/24134354/armageddon_fyAFauBd-200x200.jpg' },
      { id: 4, title: 'Homelander gone crazy', img: 'https://www.giantfreakinrobot.com/wp-content/uploads/2020/10/homelander-the-boys-feature-200x200.jpg' },
      { id: 5, title: 'Intergalactical war', img: 'https://i.pinimg.com/originals/ad/45/23/ad4523ab87470b21ef852dbca00dcf8f.png' },
      { id: 6, title: 'Massive fire spreading', img: 'https://cleanmalaysia.com/wp-content/uploads/2016/09/1534339001-forest-fire_04-PS-200x200.jpg' }
    ];
    return { heroes, crises };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Hero | Crisis>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}