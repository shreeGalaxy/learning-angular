import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/comments/comments.component';
import { CreatEditCommentComponent } from './admin/creat-edit-comment/creat-edit-comment.component';
import { CreatEditPostComponent } from './admin/creat-edit-post/creat-edit-post.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/posts/posts.component';
import { ReactiveFormsValidationComponent } from './admin/reactive-forms-validation/reactive-forms-validation.component';
import { TemplateDrivenFormsValidationComponent } from './admin/template-driven-forms-validation/template-driven-forms-validation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ContactComponent } from './public/contact/contact.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'learning-angular', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: PostsComponent },
  { path: 'post/add-edit-post', component: CreatEditPostComponent },
  { path: 'post/add-edit-post/:postId', component: CreatEditPostComponent },
  { path: 'comments/:postId', component: CommentsComponent },
  { path: 'comments/add-edit-comment/:postId', component: CreatEditCommentComponent },
  { path: 'comments/add-edit-comment/:postId/:commentId', component: CreatEditCommentComponent },

  { path: 'template', component: TemplateDrivenFormsValidationComponent},
  { path: 'reactive/:postId', component: ReactiveFormsValidationComponent},


  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
