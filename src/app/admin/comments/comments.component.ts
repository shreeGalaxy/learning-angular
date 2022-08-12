import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  //global variable declaration
  comment:any = [];
  id:string = "";

  constructor(
    private router: Router, 
    private postService: PostService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Get post id from url
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('postId')!;
    });
    //get particular record respective to post id
    this.postService.post.map(post => {
      if(post.id === +this.id) {
        return this.comment = post.comments;
      } return [];
    });
  }
}
