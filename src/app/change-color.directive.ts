import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element: ElementRef) {}

    @HostListener('mouseenter')mouseEnter(): void {
       this.changeColor('green');
    }

    @HostListener('mouseleave')mouseLeave(): void {
      this.changeColor('red');
   }
    changeColor(color: string): void{
      this.element.nativeElement.style.color = color;
    }
   }


