import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router, public postService: PostService) { }

  ngOnInit(): void {
  }
  addEditPost() {
    // condition lagana post/create or post/edit ese url direct hogi
    this.router.navigate(['/post/add-edit-post']);
  }
  delete(postId: number) {
    this.postService.post = this.postService.post.filter((post) => {
        return post.id !== postId;
    })
  }
  editPost(postData: any) {
    this.router.navigate(['/post/add-edit-post/'+postData.id]);
  }
}
