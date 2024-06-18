import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextWithDelay]'
})
export class TextWithDelayDirective {
  constructor(private elementRef: ElementRef) {
    this.hideElement();
    this.showElementDelayed(2000);
  }

  private hideElement(): void {
    this.elementRef.nativeElement.style.display = 'none';
  }

  private showElementDelayed(delay: number): void {
    setTimeout(() => {
      this.elementRef.nativeElement.style.display = ''; 
    }, delay);
  }
}