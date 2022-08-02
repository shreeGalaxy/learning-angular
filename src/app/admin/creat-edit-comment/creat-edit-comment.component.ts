import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-edit-comment',
  templateUrl: './creat-edit-comment.component.html',
  styleUrls: ['./creat-edit-comment.component.scss']
})
export class CreatEditCommentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigate(['/comments/:1']);
  }
}
