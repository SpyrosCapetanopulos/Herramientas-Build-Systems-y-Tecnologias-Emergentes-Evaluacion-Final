import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBarraComponent } from './page-barra.component';

describe('PageBarraComponent', () => {
  let component: PageBarraComponent;
  let fixture: ComponentFixture<PageBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
