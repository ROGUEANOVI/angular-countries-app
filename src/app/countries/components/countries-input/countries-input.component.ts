import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html'
})
export class CountriesInputComponent implements OnInit {

  @Input() placeholder: string="";

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debounce: Subject<string> = new Subject(); 
  
  term: string ="";
  
  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))  
    .subscribe({
      next: value => this.onDebounce.emit(value)
    });
  }

  keyPressed(){
    this.debounce.next(this.term);
  }
  
  search(){
    this.onEnter.emit(this.term);
  }

}
