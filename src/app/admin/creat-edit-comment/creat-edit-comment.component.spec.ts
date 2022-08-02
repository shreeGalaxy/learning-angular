import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEditCommentComponent } from './creat-edit-comment.component';

describe('CreatEditCommentComponent', () => {
  let component: CreatEditCommentComponent;
  let fixture: ComponentFixture<CreatEditCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEditCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatEditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
