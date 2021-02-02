import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  // async on the template - auto unsubscribe
  crisisObs!: Observable<Crisis>;
  randoms!: Hero[];

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCrisis();
    this.getRandomHeroes();
  }

  getCrisis() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.crisisObs = this.crisisService.getCrisis(id);
  }

  getRandomHeroes(): void {
    this.heroService.getRandomHeroes()
      .subscribe(randoms => this.randoms = randoms);
  }

  goBack() {
    this.location.back();
  }

}
