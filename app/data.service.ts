import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rowNumber: number = 0;
  rowSubject: Subject<number[]> = new Subject<number[]>()

  addData(){
    this.rowNumber++;
    this.rowSubject.next(Array.from(Array(this.rowNumber).keys()));
  }

  deleteData(){
    this.rowNumber--;
    this.rowSubject.next(Array.from(Array(this.rowNumber).keys()));
  }

  constructor() { }
}
