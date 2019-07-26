import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild('f', {static: true}) signupForm: NgForm;

  // defaultQuestion = 'pet';
  // answer = '';
  genders = ['Male', 'Female']  ;
  // user = {
  //   username: '',
  //   email: '',
  //   secret: '',
  //   answer: '',
  //   gender: ''
  // };

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signupForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswer: '',
  //   //   gender: 'Male'
  //   // });
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }

  // // onSubmit(form: NgForm) {
  // //   console.log(form);
  // // }

  // onSubmit() {
  //   // console.log(this.signupForm);
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secret = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;
  // }

  // onReset() {
  //   this.signupForm.reset();
  // }

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('Male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
