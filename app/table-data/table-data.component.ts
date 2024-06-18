import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent {
  rows?: Observable<number[]> = this.dataService.rowSubject;

  constructor(private dataService: DataService){}
}
