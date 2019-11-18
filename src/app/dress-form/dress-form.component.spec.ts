import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressFormComponent } from './dress-form.component';

describe('DressFormComponent', () => {
  let component: DressFormComponent;
  let fixture: ComponentFixture<DressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
