import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountServiceService {
  sbj = new BehaviorSubject(0);

  constructor() { }

  incr():void{
    this.sbj.next(this.sbj.value + 1);
  }

  decr():void{
    this.sbj.next(this.sbj.value - 1);
  }
}
