import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  control: FormGroup;
  code;
  member: any;
  @ViewChild('dt') table: Table;
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    // this.code = router.snapshot.params.code;
    // console.log(this.code);
    // this.http.post('http://localhost/TTMservice/member/' + this.code)
    // .subscribe(data => {
    //   this.member = data;
    // }, error => {
    // });

  }
  showMember(value): void {
    console.log(value);
    const json = { id: value.id, name: value.name };
    console.log(json);
  }

  ngOnInit(): void {
    this.http.get('http://localhost/TTMservice/member').subscribe((data) => {
      this.member = data;
      console.log(data);
    });
  }
}


