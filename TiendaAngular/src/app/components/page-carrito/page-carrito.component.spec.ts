import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarritoComponent } from './page-carrito.component';

describe('PageCarritoComponent', () => {
  let component: PageCarritoComponent;
  let fixture: ComponentFixture<PageCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
