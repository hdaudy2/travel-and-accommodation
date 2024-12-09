import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: false
})
export class ClickOutsideDirective {

@Output() clickOutside = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

}
