import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formLogin: FormGroup;

  constructor(
  	private formBuilder: FormBuilder
  	) { }

  ngOnInit() {
  	this.formLogin = this.formBuilder.group({
  		email: this.formBuilder.control(''),
  		password: this.formBuilder.control('')
  	});
  }

  send() {
  	console.log(this.formLogin.value);
  }

}
