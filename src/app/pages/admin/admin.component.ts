import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatFileUploadModule } from 'angular-material-fileupload';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      // tslint:disable-next-line: max-line-length
      odName: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      blogTitle: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      blogTag: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      blogCategory: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      blogText: new FormControl(null, { validators: [Validators.required, Validators.pattern('[^0-9\.\?\!\@\#\$\%\^\&\*\(\)\<\>\{\}]+')] }),
      blogPhoto: new FormControl(null, { validators: [Validators.required] }),
      blogDate: new FormControl(null, { validators: [Validators.required] }),
    });
   
  }

  addBlog()
  {}

}
