import { Component, OnInit } from '@angular/core';
import { UserServices } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersActive: UserServices){
    
  }

  ngOnInit(): void {
      this.users = this.usersActive.activeUsers
  }

  onSetToInactive(id: number) {
    this.usersActive.userToInactive.subscribe(
      (amount: number) => console.log("User set to inactive " + amount)
    )
    this.usersActive.onSetToInactive(id)
  }
}
