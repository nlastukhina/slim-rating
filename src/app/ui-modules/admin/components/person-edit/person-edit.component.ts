import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../../../../models/person.model';
import { PersonService } from '../../../../services/person.services';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit {
  @Input() public personId = '1';

  // @ts-ignore
  person: IPerson;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getPerson(this.personId);
  }

  getPerson(id: string) {
    this.personService.getPerson(id).subscribe({
      next: (person) => (this.person = person),
    });
  }

  calculate() {
    this.person.weightLost = +(this.person.weightCurrent - this.person.weightInitial).toFixed(2);

    if (this.person.weightLost > 0) {
      this.person.percent = +(((this.person.weightInitial - this.person.weightCurrent) * 100) / this.person.weightLostGoal).toFixed(0);
    } else {
      this.person.percent = +((Math.abs(this.person.weightLost) * 100) / this.person.weightLostGoal).toFixed(0);
    }

    this.personService.updatePerson(this.person);
  }
}
