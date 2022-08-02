import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/comments/comments.component';
import { CreatEditCommentComponent } from './admin/creat-edit-comment/creat-edit-comment.component';
import { CreatEditPostComponent } from './admin/creat-edit-post/creat-edit-post.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/posts/posts.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ContactComponent } from './public/contact/contact.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post', component: PostsComponent },
  { path: 'add-edit-post', component: CreatEditPostComponent },
  { path: 'add-edit-post/:postId', component: CreatEditPostComponent },
  { path: 'comments/:postId', component: CommentsComponent },
  { path: 'add-edit-comment/:commentId', component: CreatEditCommentComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
