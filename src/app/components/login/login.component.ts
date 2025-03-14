import { Component } from '@angular/core'
import { CommonModule } from '@angular/common' // ✅ Needed for *ngIf
import { FormsModule } from '@angular/forms' // ✅ Needed for [(ngModel)]

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule], // ✅ Import CommonModule and FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''
  password: string = ''
  errorMessage: string = ''

  login () {
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login successful')
    } else {
      this.errorMessage = 'Invalid credentials!'
    }
  }
}
