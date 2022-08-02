import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-edit-post',
  templateUrl: './creat-edit-post.component.html',
  styleUrls: ['./creat-edit-post.component.scss']
})
export class CreatEditPostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigate(['/post']);
  }
}
