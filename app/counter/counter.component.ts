import { Component } from '@angular/core';
import { CountServiceService } from '../count-service.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor(private countService: CountServiceService){}

  getCount():number{
    return this.countService.sbj.value;
  }
}
