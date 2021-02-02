import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss']
})
export class HeroCreateComponent implements OnInit {

  success : boolean = false;

  constructor(private heroService: HeroService,
    private formBuilder: FormBuilder) { }

  createForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    superpower: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    suitColor: ['',
      Validators.required
    ]
  });

  get name() {
    return this.createForm.get('name');
  }

  get superpower() {
    return this.createForm.get('superpower');
  }

  get suitColor() {
    return this.createForm.get('suitColor');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() : void {

  }

  onSubmit() {
    var hero: Hero = this.createForm.value;
    if (this.heroService.isAcceptableHero(hero)) {
      this.add(hero);
      this.resetForm();
      this.success = true;
    }
  }

  private add(hero: Hero): void {
    this.heroService.addHero(hero)
      .subscribe();
  }

  private resetForm(): void {
    this.createForm.reset();
  }

  hideSuccess() {
    this.success = false;
  }

}
