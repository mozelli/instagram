import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';

import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	@Input() post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  handleLike(id) {
    this.postService.addLike(id).subscribe(post => {} );
  }

  deletePost(id) {
    this.postService.delete(id).subscribe();
  }


}
