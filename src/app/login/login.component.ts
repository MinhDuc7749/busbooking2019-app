
import {Component, OnInit, AfterContentInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
//import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {APIContext} from '../APIContext';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
//import {UrlNotLogin, UrlTraining} from '../SiteUrlContext';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { MessageComponent } from '../message/message.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  , '../../assets/css/bootstrap/bootstrap.min.css'
  , '../../assets/css/font-awesome.min.css'
  , '../../assets/css/jquery-comfirm/jquery-confirm.css'
  ]
})
export class LoginComponent implements OnInit, AfterViewInit {
  
  apiContext = new APIContext();
  errorMsgEmail = '-';
  errorMsgPassword = '-';

  loginUserData = {
    email: '',
    password: ''
  };

  constructor(//private _auth: AuthService,
    private _router: Router, private http: HttpClient, private toastr: ToastrService,
    private  dialog:  MatDialog
    ) { 
  }
  
  ngAfterViewInit() {
    //$.getScript('../../assets/js/jquery/jquery-3.4.1.min.js');
    //$.getScript('../../assets/js/bootstrap/bootstrap.min.js');
    //$.getScript('../../assets/js/jquery-comfirm/jquery-confirm.js');
    
  }

  ngOnInit() {
  }


  loginUser() {
    const body = new HttpParams()
      .set('email', this.loginUserData.email)
      .set('password', this.loginUserData.password);
    
    this.http.post<any>(this.apiContext.host + 'user/action/login', body).subscribe(
      res => {
        console.log(res);
        
        if(res.code == 200){
          console.log('login thanh cong');
          
      }else{
        // this.popup.options = {color:  "red"}
        //   this.popup.show();
        //   console.log('login succes!');
       // confirm('Do you really want to logout?');
   
          console.log('Email hoặc mật khẩu không chính xác');
          this.dialog.open(MessageComponent,{ data: {
            
            message:  "Error!!!"
            }
          //  border-top: '20px solid red'
          });
      

      }
      }
    );
  }




  checkValidEmail() {
    if (this.loginUserData.email != null) {
      this.loginUserData.email = this.formatText(this.loginUserData.email);
    }
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/gm;
    if (this.loginUserData.email == null || this.loginUserData.email === '') {
      this.errorMsgEmail = 'Email is not null!';
      return false;
    } else if (!regex.test(this.loginUserData.email)) {
      this.errorMsgEmail = 'Invalid email format.';
      return false;
    } else {
      this.errorMsgEmail = '';
      return true;
    }
  }

  checkValidPassword() {
    if (this.loginUserData.password == null || this.loginUserData.password === '') {
      this.errorMsgPassword = 'Password is not null.';
      return false;
    } else {
      this.errorMsgPassword = '';
      return true;
    }
  }

  formatText(s: string) {
    return s.trim().replace(/\s\s+/g, ' ');
  }

}
