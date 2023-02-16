import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamemasterStartComponent } from './gamemaster-start.component';

describe('GamemasterStartComponent', () => {
  let component: GamemasterStartComponent;
  let fixture: ComponentFixture<GamemasterStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamemasterStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamemasterStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
