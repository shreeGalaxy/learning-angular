import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEditPostComponent } from './creat-edit-post.component';

describe('CreatEditPostComponent', () => {
  let component: CreatEditPostComponent;
  let fixture: ComponentFixture<CreatEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEditPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
