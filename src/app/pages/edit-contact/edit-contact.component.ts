import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  editFormSubmit: boolean | null = null;
  urlToHit: string = '';
  list: any;
  id: any;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _apiService: ApiService) {
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => { this.id = params.get('id') });
    this.GetDataById(this.id);
  }

  get editContactFormControls() {
    return this.editContactForm.controls;
  }

  /* API call */
  GetDataById(id: any) {
    this.urlToHit = 'Contacts/GetContactById/' + id;
    this._apiService.Get(this.urlToHit).subscribe((data) => {
      this.list = data;
      console.log('data', data);
      this.editContactForm.patchValue(data);
    })
  }

  /*--Update the Data--*/
  UpdateValues() {
    this.editContactForm.setValue({
      id: this.id,
      firstName: this.list.firstName,
      lastName: this.list.lastName,
      email: this.list.email
    });
  }

  editContactForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  /* API call */
  update() {
    this.editFormSubmit = true;
    if (this.editContactForm.invalid) {
      return;
    } else {
      let model = this.editContactForm.value;
      model.id = this.id;
      this._apiService.Put('Contacts/Update/', model).subscribe(d => {
        if (d) {
          alert("Updated Successfully");
          this.GetDashboardData();
          this._router.navigate(['']);
        } else {
          alert("something went wrong!!!");
        }
      });
    }
  }

  GetDashboardData() {
    this.urlToHit = 'Contacts/GetAllContacts';
    this._apiService.Get(this.urlToHit).subscribe((data) => {
      this.list = data;
    });
  }

  cancel() {
    this._router.navigate(['']);
  }

}
