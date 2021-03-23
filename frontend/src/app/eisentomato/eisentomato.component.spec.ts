import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EisentomatoComponent } from './eisentomato.component';

describe('EisentomatoComponent', () => {
  let component: EisentomatoComponent;
  let fixture: ComponentFixture<EisentomatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EisentomatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EisentomatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
