import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideRouter, RouterLink } from '@angular/router';

import { HomeComponent } from './home.component';
import { hops } from './route-hops';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule, RouterLink],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders every hop plus the unanswered next hop', () => {
    const nodes = fixture.nativeElement.querySelectorAll('.node');
    expect(nodes.length).toBe(hops.length + 1);
  });
});
