import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMouseWatcherDirective]'
})
export class MouseWatcherDirective {
  @HostBinding('style.color') color: string | undefined;
  @HostBinding('style.fontSize') fontSize: string | undefined;
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'blue'; 
  }

  @HostListener('click') onClick() {
    this.fontSize = '20px'; 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'lightgray'; 
  }
}