import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();
  isAuthenticated = false;
  private userSub:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user =>{
      console.log(this.isAuthenticated);
       this.isAuthenticated = !!user;
       console.log(!user);
       console.log(!!user);
     })  
  }
  onClose(){
    this.sidenavClose.emit();
  }
}
