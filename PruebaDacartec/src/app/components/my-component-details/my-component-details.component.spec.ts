import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentDetailsComponent } from './my-component-details.component';

describe('MyComponentDetailsComponent', () => {
  let component: MyComponentDetailsComponent;
  let fixture: ComponentFixture<MyComponentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
