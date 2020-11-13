import { Component, OnInit , ViewChild} from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Feedback } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  feedbackForm:FormGroup;
  feedback:Feedback;
  
  @ViewChild('fform') feedbackFormDirective;
  
  formErrors = {
    'firstname': '',
    'email': '',
    'message':''
  };

  validationMessages = {
    'firstname': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    }, 
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
    'message':{
      'required':       'Message is required'
    }
  };


  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }


  createForm(){
    
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      email: ['', [Validators.required, Validators.email] ],
      message: ['',[Validators.required]]
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname:'',
      email:'',
      message:''
    });
  }

}
