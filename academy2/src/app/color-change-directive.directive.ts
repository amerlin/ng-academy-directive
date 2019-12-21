import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[colorchange]'
})
export class ColorChangeDirectiveDirective {

  // tslint:disable-next-line:variable-name
  private _defaulColor = 'red';
  // tslint:disable-next-line:no-input-rename
  @Input('colorchange') highlightColor: string;

  constructor(private el: ElementRef, private render: Renderer) {
  }

  /** to intercept DOM event */
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.highlightColor);
    this.changecolor(this.highlightColor || this._defaulColor);
  }

  /** to intercept DOM event */
  @HostListener('mouseleave') onMouseLeave() {
    console.log(this.highlightColor);
    this.changecolor(null);
  }

  private changecolor(color: string) {
    this.render.setElementStyle(this.el.nativeElement, 'color', color);
  }

}
