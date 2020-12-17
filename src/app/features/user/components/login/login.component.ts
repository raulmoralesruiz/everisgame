import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  registeredUsers: any[];

  constructor(private loginService: LoginService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.saveRegisteredUsers();
  }

  saveRegisteredUsers(): void {
    this.loginService.saveRegisteredUsers().subscribe(
      (res) => {
        this.registeredUsers = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  login(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let encontrado = false;

    for (let i = 0; i < this.registeredUsers.length && !encontrado; i++) {
      let user = this.registeredUsers[i].userName;
      let pass = this.registeredUsers[i].pass;

      // Se comprueba si el usuario y contraseña son correctos
      if (user == username && pass == password) {
        encontrado = true;

        // Se guarda el usuario activo en session storage.
        sessionStorage.setItem('activeUser', user);

        // Se envía la ruta hacía el componente register.
        this.router.navigate(['game']);
      }
    }
    if (!encontrado) {
      alert(`Acceso denegado`);
    }
  }
}
