import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';
import { CreatEditPostComponent } from './creat-edit-post/creat-edit-post.component';
import { CreatEditCommentComponent } from './creat-edit-comment/creat-edit-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormsValidationComponent } from './template-driven-forms-validation/template-driven-forms-validation.component';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    CommentsComponent,
    CreatEditPostComponent,
    CreatEditCommentComponent,
    TemplateDrivenFormsValidationComponent,
    ReactiveFormsValidationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
