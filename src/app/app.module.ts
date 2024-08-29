import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NotfounComponent } from './components/notfoun/notfoun.component';
import { LogsComponent } from './components/logs/logs.component';
import { RerouterComponent } from './components/rerouter/rerouter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    EmployeesComponent,
    LoginComponent,
    NotfounComponent,
    LogsComponent,
    RerouterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
