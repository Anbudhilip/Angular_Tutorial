import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CURD } from './curd';


describe('CURD', () => {
  let component: CURD;
  let fixture: ComponentFixture<CURD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CURD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CURD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
