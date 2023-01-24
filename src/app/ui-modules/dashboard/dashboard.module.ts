import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProgressBarCircularComponent } from './components/progress-bar-circular/progress-bar-circular.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PersonCardComponent, DashboardPageComponent, ProgressBarCircularComponent],
})
export class DashboardModule {}
