import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoressListComponent } from './jugadoress-list.component';

describe('JugadoressListComponent', () => {
  let component: JugadoressListComponent;
  let fixture: ComponentFixture<JugadoressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadoressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
