import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

	API = environment.API;

  constructor(
  	private httpClient: HttpClient,
  	private router: Router
  	) { }


  get() {
  	return this.httpClient.get(`${this.API}/posts`)
  		.pipe(
  			take(1)
  		);
  }

  post(post) {
  	return this.httpClient.post(`${this.API}/posts`, post);
  }

  addLike(id) {
  	return this.httpClient.post(`${this.API}/posts/${id}/like`, id);
  }

  delete(id) {
    return this.httpClient.delete(`${this.API}/posts/${id}`, id);
  }
}
