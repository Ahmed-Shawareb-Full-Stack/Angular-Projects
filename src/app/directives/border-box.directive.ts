import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBorderBox]',
})
export class BorderBoxDirective implements OnChanges {
  @Input() appBorderBox: string = 'blue';
  @Input() hoverColor: string = 'red';
  constructor(private elemRef: ElementRef) {}
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.appBorderBox}`;
  }
  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.hoverColor}`;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid  ${this.appBorderBox}`;
  }
}
