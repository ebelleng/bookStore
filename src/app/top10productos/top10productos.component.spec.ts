import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10productosComponent } from './top10productos.component';

describe('Top10productosComponent', () => {
  let component: Top10productosComponent;
  let fixture: ComponentFixture<Top10productosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10productosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10productosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
