import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter, Routes } from '@angular/router'
import { AppComponent } from './app/app.component'
import { LoginComponent } from './app/components/login/login.component'
import { DashboardComponent } from './app/components/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err))
