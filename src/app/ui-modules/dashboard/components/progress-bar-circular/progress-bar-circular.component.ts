import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar-circular',
  templateUrl: './progress-bar-circular.component.html',
  styleUrls: ['./progress-bar-circular.component.scss'],
})
export class ProgressBarCircularComponent {
  // @ts-ignore
  @Input() percent: string;
  // @ts-ignore
  @Input() goal: string;
  // @ts-ignore
  @Input() theme: string;
}
