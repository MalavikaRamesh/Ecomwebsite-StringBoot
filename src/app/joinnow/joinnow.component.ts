import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import { LuserService } from '../luser.service';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
  
  loginUser:LoginUser = new LoginUser();
  constructor(private luserservice: LuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.loginUser)
    this.luserservice.luser(this.loginUser).subscribe(data =>{
      alert("Login success")
    },error=>alert("Invalid email or password"));

  }
  
}
