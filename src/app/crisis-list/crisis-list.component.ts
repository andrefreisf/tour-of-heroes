import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises!: Crisis[];

  constructor(private crisisService: CrisisService) { }

  ngOnInit(): void {
    this.getCrises();
  }

  getCrises() {
    this.crisisService.getCrises()
      .subscribe(fetchedCrises => this.crises = fetchedCrises);
  }

}
