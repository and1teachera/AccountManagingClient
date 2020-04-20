import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableGridComponent } from './sortable-grid.component';

describe('SortableGridComponent', () => {
  let component: SortableGridComponent;
  let fixture: ComponentFixture<SortableGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
