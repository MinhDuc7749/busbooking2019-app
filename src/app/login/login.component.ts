
import {Component, OnInit, AfterContentInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
//import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {APIContext} from '../APIContext';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
//import {UrlNotLogin, UrlTraining} from '../SiteUrlContext';

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

  loginUserData = {
    email: '',
    password: ''
  };

  constructor(//private _auth: AuthService,
    private _router: Router, private http: HttpClient, private toastr: ToastrService) { 
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
      }
    );
  }

}
