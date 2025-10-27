import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CURDHTTP } from './curdhttp';

describe('CURDHTTP', () => {
  let component: CURDHTTP;
  let fixture: ComponentFixture<CURDHTTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CURDHTTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CURDHTTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
