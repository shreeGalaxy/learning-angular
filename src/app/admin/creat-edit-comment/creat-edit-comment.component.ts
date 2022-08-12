import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-creat-edit-comment',
  templateUrl: './creat-edit-comment.component.html',
  styleUrls: ['./creat-edit-comment.component.scss']
})
export class CreatEditCommentComponent implements OnInit {
  comment: any= [];
  msg:string = '';
  postId: number = 1;
  commentId: number = 1;
  constructor(private router: Router, private postService: PostService, private route: ActivatedRoute) { 
    //Get post id from url
    this.route.paramMap.subscribe((params) => {
      this.postId = +params.get('postId')!;
      this.commentId = +params.get('commentId')!;
      console.log("hskjd", params)
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.commentId) {
      //create functionality
      console.log("in add mode");
      let tempId: number= 1;
      this.postService.post.map((post) => {
        if(tempId < post.id) {
          tempId = post.id;
        }
      });
      this.postService.post[tempId-1].comments.push(
        this.comment = {
        id: tempId+1,
        comment: this.comment
      });
    } else {
      //edit functionality
      this.postService.post.map((post) => {
        console.log("in edit mode", post);
        if(post.id === this.postId)  {
          if(this.commentId === post.comments.id) {
            post.comments.comment = this.msg;
          }
        }
      })
    }
    console.log("url", '/comments/:'+this.postId)
    // this.router.navigate(['/comments/:'+this.postId]);
  }
}
