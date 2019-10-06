import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTheSameRowComponent } from './make-the-same-row.component';

describe('MakeTheSameRowComponent', () => {
  let component: MakeTheSameRowComponent;
  let fixture: ComponentFixture<MakeTheSameRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTheSameRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTheSameRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
