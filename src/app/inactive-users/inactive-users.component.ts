import { Component, OnInit } from '@angular/core';
import { UserServices } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersActive: UserServices){

  }

  ngOnInit(): void {
      this.users = this.usersActive.inactiveUsers
  }

  onSetToActive(id: number) {
    this.usersActive.userToActive.subscribe(
      (amount: number) => console.log("User set to inactive " + amount)
    )
    this.usersActive.onSetToActive(id)
  }
}
