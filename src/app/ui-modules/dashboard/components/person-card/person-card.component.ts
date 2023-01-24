import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from '../../../../models/person.model';
import { PersonService } from '../../../../services/person.services';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent implements OnInit {
  @Input() public personId = '1';

  theme: string | undefined;
  // @ts-ignore
  person: IPerson;
  public today = new Date();
  motivateMessage = 'Ничего не изменилось';

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getPerson(this.personId);
  }

  getPerson(id: string) {
    this.personService.getPerson(id).subscribe({
      next: (person) => {
        this.person = person;

        if (this.person?.weightLost < 0) {
          this.theme = this.person.theme;
          this.motivateMessage = 'Сброшено';
        } else if (this.person?.weightLost > 0) {
          this.theme = 'gray';
          this.person.percent = 0;
          this.motivateMessage = 'Перевес';
        } else {
          this.theme = 'gray';
        }
      },
    });
  }
}
