import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appVerifyCaps]'
})
export class VerifyCapsDirective {
  @Output('capsLock') capsLock = new EventEmitter<Boolean>();
  constructor(private element: ElementRef) { }

  @HostListener('window:keydown', ['$event'] )
  onKeyDown(event: KeyboardEvent): void {
    this.capsLock.emit(
      event.getModifierState && event.getModifierState('CapsLock')
    );
  }
  @HostListener('window:keyup', ['$event'] )
  onKeyUp(event: KeyboardEvent): void {
    this.capsLock.emit(
      event.getModifierState && event.getModifierState('CapsLock')
    );
  }
  }
