import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PustItemsComponent } from './pust-items.component';

describe('PustItemsComponent', () => {
  let component: PustItemsComponent;
  let fixture: ComponentFixture<PustItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PustItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PustItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
