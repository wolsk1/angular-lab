import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({ selector: '[customElement]', standalone: true })
export class CustomElementDirective implements OnChanges {
    @Input('customElement') elementType: string = 'h2';
    
    constructor(private el: ElementRef, private renderer: Renderer2) {
      
       }

ngOnChanges(changes: SimpleChanges): void {
    const div = this.renderer.createElement(this.elementType);
    const text = this.renderer.createText('Hello World!');
    this.renderer.appendChild(div, text);
  
    // Find a parent element to append the div to
    let parentElement = this.el.nativeElement.parentNode;
  
    // Insert the div before the ng-container
    this.renderer.insertBefore(parentElement, div, this.el.nativeElement);
}
}