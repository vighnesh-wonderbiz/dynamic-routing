import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/generic.model';
import { RoutingService } from '../../services/routing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private routeService: RoutingService
  ) {}

  user: LoginModel = {
    email: "demotest@gmail.com",
    password: 'Test@1234',
    roleId: 0,
    pageList: [],
  };

  onSubmit() {
    this.loginService.Login(this.user).subscribe({
      next: (d) => {
        console.log(d);
        this.routeService.setRoutes(d.pageList);
        localStorage.setItem(
          'user',
          JSON.stringify({
            roleId: d.roleId,
            email: d.email,
          })
        );
        // this.router.navigate(['dashboard']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
