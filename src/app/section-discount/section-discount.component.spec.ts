import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sectionDiscountComponent } from './section-discount.component';

describe('sectionDiscountComponent', () => {
  let component: sectionDiscountComponent;
  let fixture: ComponentFixture<sectionDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sectionDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sectionDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
