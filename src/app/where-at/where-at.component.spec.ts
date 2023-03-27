import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereAtComponent } from './where-at.component';

describe('WhereAtComponent', () => {
  let component: WhereAtComponent;
  let fixture: ComponentFixture<WhereAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereAtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
