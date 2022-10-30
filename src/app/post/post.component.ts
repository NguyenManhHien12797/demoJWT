import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  getAll(){
    this.loginService.getAllPost().subscribe(data => {
      alert(JSON.stringify(data))
      console.log(data)
    });
  }
}
