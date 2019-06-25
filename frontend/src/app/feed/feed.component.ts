import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { PostService } from '../post/post.service';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

	posts: Post[];

  constructor(
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerToSocket();

  	this.postService.get().subscribe((posts) => {
  		//console.log(posts);
      this.posts = posts;
  	});
  }

  registerToSocket = () => {
    const socket = io(environment.API);

    socket.on('post', newPost => {
      this.posts = [newPost, ...this.posts];
    });

    socket.on('like', likedPost => { 
      this.posts = this.posts.map(post => 
        post._id == likedPost._id ? likedPost : post
      );
    });

    socket.on('delete', result => { 
      this.postService.get().subscribe((posts) => {
      this.posts = posts;
    });
    });
  }
}
