import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyImageComponent } from './kitty-image.component';

describe('KittyImageComponent', () => {
  let component: KittyImageComponent;
  let fixture: ComponentFixture<KittyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittyImageComponent]
    });
    fixture = TestBed.createComponent(KittyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
