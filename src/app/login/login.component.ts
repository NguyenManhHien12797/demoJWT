import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }


  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()
  })

  submit(){
    const login= this.loginForm.value;
    console.log(login)
    this.loginService.login(login).subscribe(data =>{
      console.log(data)
      localStorage.setItem('data', JSON.stringify(data));
      alert(JSON.stringify(data));
      console.log(data);
    }, error => {
      console.log(error)
    });

  }

  getAll(){
    this.loginService.getAllPost().subscribe(data => {
      alert(JSON.stringify(data))
      console.log(data)
    });
  }

}
