import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister= new EventEmitter();
  model: any={};
  constructor(private accountService: AccountService, private toastr: ToastrService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  register(){
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.cancel();
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    }
    )
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
