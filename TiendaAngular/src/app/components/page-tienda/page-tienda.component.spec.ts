import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTiendaComponent } from './page-tienda.component';

describe('PageTiendaComponent', () => {
  let component: PageTiendaComponent;
  let fixture: ComponentFixture<PageTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
