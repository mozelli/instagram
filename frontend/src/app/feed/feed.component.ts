import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { Router } from '@angular/router';

import { FeedService } from './feed.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

	posts;

  constructor(
    private feedService: FeedService,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerToSocket();

  	this.feedService.get().subscribe((posts) => {
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
      this.feedService.get().subscribe((posts) => {
      this.posts = posts;
    });
    });
  }

  handleLike(id) {
    this.feedService.addLike(id).subscribe(post => {} );
  }

  deletePost(id) {
    //console.log(id);
    //this.feedService.delete(id).subscribe(result => {this.router.navigate(['/feed'])});
    this.feedService.delete(id).subscribe(result => {});
  }

}
