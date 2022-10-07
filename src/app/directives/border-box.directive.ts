import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderBox]',
})
export class BorderBoxDirective {
  @Input() appBorderBox: string = 'gray';
  constructor(private elemRef: ElementRef) {
    elemRef.nativeElement.style.border = `2px solid ${this.appBorderBox}`;
  }
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = '2px solid blue';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid  ${this.appBorderBox}`;
  }
}
