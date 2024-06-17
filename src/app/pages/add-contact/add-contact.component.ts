import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactFormSubmit: boolean | null = null;
  constructor(private _router: Router, private _apiService: ApiService) { }

  ngOnInit(): void {
  }

  get addContactFormControls() {
    return this.addContactForm.controls;
  }

  addContactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  /* API call */
  submit() {
    this.contactFormSubmit = true;
    if (this.addContactForm.invalid) {
      return;
    } else {
      let model = this.addContactForm.value;
      this._apiService.Post('Contacts/CreateContact', model).subscribe(d => {
        if (!d.isError) {
          alert("Data saved sucessfully");
          this._router.navigate(['']);
        } else {
          alert("Something went wrong");
        }
      });
    }
  }

  cancel() {
    this._router.navigate(['']);
  }

}
