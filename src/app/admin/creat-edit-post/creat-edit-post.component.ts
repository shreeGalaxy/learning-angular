import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-creat-edit-post',
  templateUrl: './creat-edit-post.component.html',
  styleUrls: ['./creat-edit-post.component.scss']
})
export class CreatEditPostComponent implements OnInit {
  title: string = '';
  author: string = '';
  postContent: string = '';
  postDate:string = '';
  id:string = '';
  post:any;
  constructor(
    private router: Router, 
    private postService: PostService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Get post id from url
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('postId')!;
    });
    if(this.id) {
      //get particular record respective to post id
      this.post = this.postService.post.find(post => {
        if(post.id === parseInt(this.id)) {
          return true;
        } 
        return false;
      });
      // console.log("post", this.post);
      //fill the post data record in input's
       this.title = this.post.title;
       this.author = this.post.author;
       this.postContent = this.post.content;
    }
  }
  onSubmit() {
    //formula for getting current date
    let today = new Date();
    this.postDate = (today.getDate() < 10 ? '0'+today.getDate() : today.getDate())+'-'+(today.getMonth()+1 ? '0'+(today.getMonth()+1) : today.getMonth()+1)+'-'+ today.getFullYear();

    if(!this.id) {
      //create functionality
      // console.log("in add mode");
      let tempId: number= 1;
      this.postService.post.map((post) => {
        if(tempId < post.id) {
          tempId = post.id;
        }
      });
      this.postService.post.push({
        id: tempId+1,
        title: this.title,
        author: this.author,
        content: this.postContent,
        date: this.postDate,
        comments: {}
      });
    } else {
      //edit functionality
      // console.log("in edit mode");
      this.postService.post.map((post) => {
        if(post.id === parseInt(this.id))  {
          post.title = this.title;
          post.author = this.author;
          post.content = this.postContent;
        }
      })
    }
    this.router.navigate(['/post']);
  }
}
