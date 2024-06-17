import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isDelete !: boolean;
  list: any;
  urlToHit: string = '';
  result: any;
  deleteid: any;
  @ViewChild('noClick') noClick !: ElementRef<any>;

  constructor(private _router: Router, private _apiService: ApiService, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.GetDashboardData();
  }

  /* API call */
  GetDashboardData() {
    this.urlToHit = 'Contacts/GetAllContacts';
    this._apiService.Get(this.urlToHit).subscribe((data) => {
      this.list = data;
    })
  }

  deleteContact() {
    this.isDelete = true;
    this.urlToHit = 'Contacts/Delete/' + this.deleteid;
    this._apiService.Delete(this.urlToHit).subscribe((data) => {
      if (!data) {
        alert("Data deleted sucessfully");
        this.noClick.nativeElement.click();
        this.GetDashboardData();
      } else {
        alert("Something went wrong");
      }
    })
  }

  deleteContactid(id: any) {
    this.deleteid = id;
  }

  CreateNewEntry() {
    this._router.navigate(['/dashboard/add']);
  }

  editContact(id: any) {
    this._router.navigate(['/dashboard/edit/' + id]);
  }

}

