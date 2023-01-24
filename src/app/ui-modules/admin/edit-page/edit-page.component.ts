import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../../models/person.model';
import { PersonService } from '../../../services/person.services';

@Component({
  selector: 'app-admin',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  persons: IPerson[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe({
      next: (persons) => (this.persons = persons),
    });
  }
}
