import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { MessageComponent } from './message/message.component';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectroleComponent } from './selectrole/selectrole.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    SelectroleComponent,

    
  ],

  entryComponents: [MessageComponent],
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right'
    }),
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

