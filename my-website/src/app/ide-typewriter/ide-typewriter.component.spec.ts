import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeTypewriterComponent } from './ide-typewriter.component';

describe('IdeTypewriterComponent', () => {
  let component: IdeTypewriterComponent;
  let fixture: ComponentFixture<IdeTypewriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeTypewriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
