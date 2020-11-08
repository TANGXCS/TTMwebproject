import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  control: FormGroup;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    this.control = this.fb.group({
      username: '',
      password: ''
    });
  }
  // tslint:disable-next-line:typedef
  login(value) {
    console.log(value);
    const json = { username: value.username, password: value.password };
    console.log(json);
    this.http.post('http://localhost:82/TTMservice/login', JSON.stringify(json))
      .subscribe(response => {
        console.log('Success');
        if (response) {
          console.log('pass');
          // this.router.navigateByUrl('/member/' + value.username);
          this.router.navigate(['/homeAdmin']);
        }
        else {
          console.log('not pass');
        }
      },
        error => {
          console.log('Faild');
        }
      );
  }

  ngOnInit(): void {
  }

}
