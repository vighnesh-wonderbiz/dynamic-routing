import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RerouterComponent } from './rerouter.component';

describe('RerouterComponent', () => {
  let component: RerouterComponent;
  let fixture: ComponentFixture<RerouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RerouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RerouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
