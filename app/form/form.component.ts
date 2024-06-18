import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
  
  registerForm: FormGroup = new FormGroup(0);
  userUnderage: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      petName: new FormControl('', Validators.required),
    });
  }
  
  onSubmit() {
    if (this.registerForm.valid && this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      const birthDate = new Date(this.registerForm.value.birthDate);
      const age = Math.floor((Date.now() - birthDate.getTime()) / (31557600000));
      if (age < 18) {
        this.userUnderage = true;
        return;
      }

      alert("Форма успешно отправлена!");
    }
  }
}
