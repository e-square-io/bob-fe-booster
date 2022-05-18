import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color = 'yellow';

  @HostBinding('style.backgroundColor') bg = 'inherit';

  @HostListener('mouseenter') onMouseover() {
    this.bg = this.color;    

    console.log(this.elementRef.nativeElement);
    
    const a = this.renderer.createElement('a');

    const text = this.renderer.createText('hello');

    this.renderer.appendChild(a, text);

    this.renderer.setAttribute(a, 'href', '#')

    this.aElement = a;
    this.renderer.appendChild(this.elementRef.nativeElement, a);
  }

  aElement: HTMLAnchorElement | null = null;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    console.log('highlight directive');
  }

  @HostListener('mouseleave', ['$event']) onMouseleave(event: MouseEvent) {
    console.log(event);
    
    this.bg = 'inherit';  
    
    if (this.aElement) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.aElement);

      this.aElement = null;
    }
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    console.log('document click', event);
  
  }

}
