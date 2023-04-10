import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiesAnalyticsComponent } from './foodies-analytics.component';

describe('FoodiesAnalyticsComponent', () => {
  let component: FoodiesAnalyticsComponent;
  let fixture: ComponentFixture<FoodiesAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodiesAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodiesAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
