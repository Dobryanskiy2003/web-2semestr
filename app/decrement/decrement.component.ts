import { Component } from '@angular/core';
import { CountServiceService } from '../count-service.service';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrl: './decrement.component.css'
})
export class DecrementComponent {
  constructor(private countService: CountServiceService){}

  decr():void{
    this.countService.decr();
  }
}
