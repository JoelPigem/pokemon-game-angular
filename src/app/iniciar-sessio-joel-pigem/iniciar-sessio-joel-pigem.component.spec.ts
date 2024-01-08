import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioJoelPigemComponent } from './iniciar-sessio-joel-pigem.component';

describe('IniciarSessioJoelPigemComponent', () => {
  let component: IniciarSessioJoelPigemComponent;
  let fixture: ComponentFixture<IniciarSessioJoelPigemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioJoelPigemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioJoelPigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
