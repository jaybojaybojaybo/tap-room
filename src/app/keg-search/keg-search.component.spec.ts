import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegSearchComponent } from './keg-search.component';

describe('KegSearchComponent', () => {
  let component: KegSearchComponent;
  let fixture: ComponentFixture<KegSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
