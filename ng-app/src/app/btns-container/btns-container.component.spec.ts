import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsContainerComponent } from './btns-container.component';

describe('BtnsContainerComponent', () => {
  let component: BtnsContainerComponent;
  let fixture: ComponentFixture<BtnsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
