import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAddress } from './child-address';

describe('ChildAddress', () => {
  let component: ChildAddress;
  let fixture: ComponentFixture<ChildAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAddress],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildAddress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
