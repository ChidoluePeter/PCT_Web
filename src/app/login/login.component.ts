import { LoginService } from './../login.service';
import { SignupService } from './../signup.service';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component,OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit {

  loginForm!:FormGroup<any>
  signupForm!:FormGroup<any>


  // form switching values

  formHeader:boolean = true
  formName:string ="LOGIN"
 // message to be displayed on the form

  message = ''

ngOnInit(): void {
  // initializing the ignition of the login form validation
  this.signupForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    phone:['',[Validators.required, Validators.nullValidator]],
    password:['',[Validators.required, Validators.minLength(6)]]
  })

  // initializing the ignition of the signup form validation

  this.loginForm = this.fb.group(
    {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
  )

  // get the email element




}

// constructor to ignite the service injection into component
constructor(
    private fb: FormBuilder,
    private SignupService : SignupService,
    private LoginService: LoginService,
    // private signupService : SignupService,
    private router: Router
  ){}

  get email(){
    return this.signupForm.get('email');
  }

// signup method service injection
  signup():void{
    const credentials =  this.signupForm.value
    console.log(credentials)
    this.SignupService.signup(credentials).subscribe({
      next: (response:any) => {
        localStorage.setItem(response.token,"token")
        console.log(response)
        this.message = response.message
        this.router.navigate(['/login'])

        setInterval(()=>{this.formName = "LOG IN"
          this.formHeader = true},2000)


      }
    })

  }

  // login method service injection
  login():void{
    const credentials = this.loginForm.value
    console.log(credentials)
    this.LoginService.login(credentials).subscribe({
      next:(response:any) => {
        localStorage.setItem(response.token, "token")
        console.log(response,"User Log In Successful")
        this.message =  "User Log In Successful"
        setInterval(()=>{this.router.navigate(["/dashboard"])},2000)
      }
    })
  }


  signupLink(){
    this.formName = "SIGN UP"
    this.formHeader = false
  }

  loginLink(){
    this.formName = "LOGIN"
    this.formHeader = true
  }


}
