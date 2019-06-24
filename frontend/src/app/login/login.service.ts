import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	API = environment.API;

  constructor(
  	private httpClient: HttpClient
  	) { }

  get() {
  	return this.httpClient.get(`${this.API}/login`)
  		.pipe(
  			take(1)
  			);
  }
}
