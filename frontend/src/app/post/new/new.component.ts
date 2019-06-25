import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { PostService } from '../post.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	newForm: FormGroup;

	image = '';

  constructor(
  		private formBuilder: FormBuilder,
  		private feedService: PostService,
  		private routes: Router
  	) { }

  ngOnInit() {
  	this.newForm = this.formBuilder.group({
  		author: this.formBuilder.control(''),
  		place: this.formBuilder.control(''),
  		description: this.formBuilder.control(''),
  		image: this.formBuilder.control('')
  	});
  }

  onChange(event) {
  	if(event.target.files && event.target.files[0]) {
  		const selectedFiles = <FileList>event.srcElement.files;
  		document.getElementById('labelInputImage').innerHTML = selectedFiles[0].name;

  		this.image = event.target.files[0];
  	}
  }

  send() {

  	const data = new FormData();
  	data.append('author', this.newForm.controls.author.value);
  	data.append('description', this.newForm.controls.description.value);
  	data.append('place', this.newForm.controls.place.value);
  	data.append('image', this.image);

  	this.feedService.post(data).subscribe((result) => {
  		this.routes.navigate(['/feed']);
  	});
  }

}
