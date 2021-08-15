import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component 
  implements OnInit, OnChanges, DoCheck, 
             AfterContentInit, AfterContentChecked, 
             AfterViewInit, AfterViewChecked, OnDestroy   {

  nombre:string = 'Fernando';
  segundos:number = 0;
  timerSubscription!:Subscription;
               
  constructor() { 
    console.log('0. constructor');
  }
  ngOnInit(): void {
    console.log('1. ngOnInit');
    this.timerSubscription = interval(1000).subscribe(i => {
      this.segundos = i
    });
  }
  ngDoCheck(): void {
    console.log('2. ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('3. ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('4. ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('5. ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('6. ngAfterViewChecked');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // limpiar el observable
    console.log('limpia el timer subscription');
    this.timerSubscription.unsubscribe();
  }

  guardar() {
    console.log("guardar");
  }

}
