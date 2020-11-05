import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private http: HttpClient,private Router: Router) { }


  login(){
    console.log("ok");
    let json = { username : this.username, password : this.password};
    this.http.post('http://localhost:82/TTMservice/login', JSON.stringify(json))
    .subscribe(response =>{
      console.log('Success')
      if(response){
        console.log('pass');
        this.Router.navigateByUrl('/member/'+this.username)
      }
      else{
        console.log('not pass');
      }
    }, 
    error => {
      console.log('Faild')
    }
    );
  }

  ngOnInit(): void {
  }

}
