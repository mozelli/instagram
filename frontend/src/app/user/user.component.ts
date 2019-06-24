import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	formUser: FormGroup;

  constructor(
  	private formBuilder: FormBuilder,
  	private userService: UserService,
  	private router: Router
  	) { }

  ngOnInit() {
  	this.formUser = this.formBuilder.group({
  		name: this.formBuilder.control(''),
  		birthday: this.formBuilder.control(''),
  		email: this.formBuilder.control(''),
  		password: this.formBuilder.control('')
  	});
  }

  send() {
  	//console.log(this.formUser.value);
  	this.userService.post(this.formUser.value).subscribe(
  		user => {
  			this.router.navigate(['/newUserConfirmation'])
  		},
  		err => {
  			console.log('Ocorreu um erro: ' + err)
  		},
  	);
  }

}
