import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  Type,
} from '@angular/core';
import { Page } from '../models/generic.model';
import { Route, Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { NotfounComponent } from '../components/notfoun/notfoun.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { EmployeesComponent } from '../components/employees/employees.component';
import { LogsComponent } from '../components/logs/logs.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  private routes: Page[] = [];
  private componentsMap: { [key: string]: Type<any> } = {
    login: LoginComponent,
    home: HomeComponent,
    dashboard: DashboardComponent,
    employees: EmployeesComponent,
    logs: LogsComponent,
  };
  private defaultRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
  ];

  constructor(private router: Router, private loginService: LoginService) {}

  initializeRoutes() {
    return new Promise<void>((resolve, reject) => {
      const user = localStorage.getItem('user');
      if (user) {
        const roleId = JSON.parse(user).roleId;
        if (roleId) {
          this.loginService.getRoutes(roleId).subscribe({
            next: (data) => {
              this.routes = data;
              this.router.resetConfig(this.generateRoutes(data));
              resolve();
            },
            error: (e) => {
              console.log(e);
              this.setDefaultRoute();
              resolve();
            },
          });
        }
      } else {
        this.setDefaultRoute();
        resolve();
      }
    });
  }

  setDefaultRoute() {
    this.router.resetConfig([
      ...this.defaultRoutes,
      { path: '**', component: NotfounComponent },
    ]);
  }

  setRoutes(pageRoutes: Page[]) {
    this.router.resetConfig(this.generateRoutes(pageRoutes));
  }

  getRoutes() {
    return this.routes;
  }

  generateRoutes(pageList: Page[]) {
    const userRoutes = pageList.map((r) => ({
      path: r.pageTitle.toLowerCase(),
      component: this.getComponent(r.pageTitle) || NotfounComponent,
    }));
    const updatedRoutes = [...this.defaultRoutes, ...userRoutes];
    updatedRoutes.push({ path: '**', component: NotfounComponent });
    console.log(updatedRoutes);
    return updatedRoutes;
  }
  private getComponent(pageTitle: string): Type<any> | undefined {
    return this.componentsMap[pageTitle.toLowerCase()];
  }
}
