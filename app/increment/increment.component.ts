import { Component } from '@angular/core';
import { CountServiceService } from '../count-service.service';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
  constructor(private countService: CountServiceService){}

  incr():void{
    this.countService.incr();
  }
}
