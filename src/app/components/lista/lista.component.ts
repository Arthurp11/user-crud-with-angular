import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista',
  imports: [FontAwesomeModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{

  faPen = faPen;
  faTrash = faTrash;

  users: User[] = [];

  constructor(private userService: UserService, private router: Router){}
  
  ngOnInit(): void{
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  btnEdit(id: any) {
    this.router.navigate(['/user_edit', id]);
  }

  btnDelete(user: User) {
    console.log(user);
    this.userService.delete(user).subscribe(() =>
    this.users = this.users.filter((u) => u.id != user.id))

    this.loadUsers();
  }
}
