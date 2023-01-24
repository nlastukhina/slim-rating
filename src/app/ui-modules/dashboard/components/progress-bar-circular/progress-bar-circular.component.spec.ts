import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarCircularComponent } from './progress-bar-circular.component';

describe('ProgressBarCircularComponent', () => {
  let component: ProgressBarCircularComponent;
  let fixture: ComponentFixture<ProgressBarCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
