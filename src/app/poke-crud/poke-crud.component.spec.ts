import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCrudComponent } from './poke-crud.component';

describe('PokeCrudComponent', () => {
  let component: PokeCrudComponent;
  let fixture: ComponentFixture<PokeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
