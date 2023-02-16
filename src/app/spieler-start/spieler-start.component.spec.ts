import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielerStartComponent } from './spieler-start.component';

describe('SpielerStartComponent', () => {
  let component: SpielerStartComponent;
  let fixture: ComponentFixture<SpielerStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpielerStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpielerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
