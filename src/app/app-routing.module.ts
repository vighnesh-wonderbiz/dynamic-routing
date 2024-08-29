import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RoutingService } from './services/routing.service';
import { HomeComponent } from './components/home/home.component';
import { NotfounComponent } from './components/notfoun/notfoun.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotfounComponent },
];
export function initializeApp(
  routingService: RoutingService
): () => Promise<void> {
  return () => routingService.initializeRoutes(); // Ensure initializeRoutes returns a promise
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [RoutingService],
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
