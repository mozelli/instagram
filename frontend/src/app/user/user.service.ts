import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	API = environment.API;

  constructor(
  	private httpClient: HttpClient
  	) { }

  post(user) {
  	return this.httpClient.post(`${this.API}/users`, user);
  }
}
