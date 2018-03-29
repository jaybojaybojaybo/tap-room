import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegDetailComponent } from './keg-detail.component';

describe('KegDetailComponent', () => {
  let component: KegDetailComponent;
  let fixture: ComponentFixture<KegDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
