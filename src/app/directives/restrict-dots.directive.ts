import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictDots]'
})
export class RestrictDotsDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (event.key === '.') return false
    return true
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    if (event.clipboardData?.getData('text/plain').includes('.')) return false
    return true
  }
}
