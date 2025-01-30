import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicsListComponent } from './relics-list.component';

describe('RelicsListComponent', () => {
  let component: RelicsListComponent;
  let fixture: ComponentFixture<RelicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelicsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
