import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditPageComponent } from './edit-page/edit-page.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [EditPageComponent, PersonEditComponent],
})
export class AdminModule {}
