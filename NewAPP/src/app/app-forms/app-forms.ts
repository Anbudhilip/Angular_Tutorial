import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { UserService, User } from '../services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app-forms.html',
  styleUrls: ['./app-forms.css']
})
export class AppAppAppFormsComponent  {//implements OnInit
 // users = signal<User[]>([]);

 // constructor(private userService: UserService) {}

  // ngOnInit() {
  //   this.loadUsers();
  // }

  // loadUsers() {
  //   this.userService.getUsers().subscribe(users => {
  //     this.users.set(users);
  //   });
  // }
}
