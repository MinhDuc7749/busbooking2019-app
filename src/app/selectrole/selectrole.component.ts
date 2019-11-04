import { Component, OnInit } from '@angular/core';
import role from './role';

@Component({
  selector: 'app-selectrole',
  templateUrl: './selectrole.component.html',
  styleUrls: ['./selectrole.component.css',
'../../assets/css/bootstrap/bootstrap.min.css',
'../../assets/css/font-awesome.min.css',
'../../assets/css/jquery-comfirm/jquery-confirm.css']
})
export class SelectroleComponent implements OnInit {
  title = 'Vui lòng chọn quyền đăng nhập'
  roles = [
    new role(1,'Nhân viên hệ thống'),
    new role(2,'Kĩ thuật nhà xe'),
    new role(3,'Nhân viên nhà xe')
  ]
  constructor() { }

  ngOnInit() {
  }

}
