import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appRmFs]'
})
export class RmFsDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click', ['$event'])
  removeFocus() {
    this.el.nativeElement.classList.remove('active');
    document.body.style.overflow = 'visible';
  }
}
