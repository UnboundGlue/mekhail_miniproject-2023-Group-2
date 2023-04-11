import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestsUiPageComponent } from './interests-ui-page.component';

describe('InterestsUiPageComponent', () => {
  let component: InterestsUiPageComponent;
  let fixture: ComponentFixture<InterestsUiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterestsUiPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsUiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
