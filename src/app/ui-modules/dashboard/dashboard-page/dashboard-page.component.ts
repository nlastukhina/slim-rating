import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../../models/person.model';
import { PersonService } from '../../../services/person.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  errorMessage = '';
  persons: IPerson[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe({
      next: (persons) => {
        this.persons = persons;

        this.persons = this.persons.sort((a, b) => b.percent - a.percent);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
