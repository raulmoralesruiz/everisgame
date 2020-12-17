import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registeredUsers: any[];

  constructor(private loginService: LoginService) {}

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    platform: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit(): void {
    this.loginService.saveRegisteredUsers().subscribe(
      (res) => {
        this.registeredUsers = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createUser(): void {
    // Se guardan los datos del formulario
    let formData = this.registerForm.value;

    // Se crea producto, utilizando datos del formulario, usando servicio createProduct
    this.loginService.createUser(formData).subscribe(
      (user) => {
        alert('Usuario creado!');
        console.log(user);

        this.registerForm.reset();
      },
      (error) => {
        console.log(error);
        alert('ERROR. No es posible crear el usuario');
      }
    );
  }
}
