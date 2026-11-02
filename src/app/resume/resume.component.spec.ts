import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      imports: [AccordionModule, DividerModule, TooltipModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
