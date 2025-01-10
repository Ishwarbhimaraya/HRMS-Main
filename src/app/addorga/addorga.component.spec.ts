import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorgaComponent } from './addorga.component';

describe('AddorgaComponent', () => {
  let component: AddorgaComponent;
  let fixture: ComponentFixture<AddorgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
