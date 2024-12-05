import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjSideMenuComponent } from './kj-side-menu.component';

describe('KjSideMenuComponent', () => {
  let component: KjSideMenuComponent;
  let fixture: ComponentFixture<KjSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KjSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KjSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
