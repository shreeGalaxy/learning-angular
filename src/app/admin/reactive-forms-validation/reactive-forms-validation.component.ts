import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.scss']
})
export class ReactiveFormsValidationComponent implements OnInit {
  id:number= 1;
  profileForm = this.fb.group({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    content: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]),
  });
  post:any;
  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private postService: PostService, 
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('postId')!;
    });
    if(this.id) {
      //get particular record respective to post id
      this.post = this.postService.post.find(post => {
        if(post.id === this.id) {
          return true;
        } 
        return false;
      });
      // console.log("post", this.post);
      this.profileForm.setValue({  
        title: this.post?.title,  
        author: this.post?.author,  
        content: this.post?.content,
      }); 
        //fill the post data record in input's
    }
  }
  onSubmit() {
    console.log(this.profileForm.value);
    if(this.id) {
      this.postService.post.map((post) => {
        if(post.id === this.id)  {
          post.title = this.profileForm.value.title!;
          post.author = this.profileForm.value.author!;
          post.content = this.profileForm.value.content!;
        }
      })
    }
    this.router.navigate(['/post']);
  }
}
