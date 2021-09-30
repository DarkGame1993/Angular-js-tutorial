import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirective {
    @Input('appStyle') styleColor: string = 'yellow';
    @Input() styleWaight: string = 'normal';
    @Input() id: string = 'lololololo';

    @HostBinding ('attr.id') idElement = null;

    constructor(private _element: ElementRef, private _renderer: Renderer2) {
        this._renderer.setStyle(this._element.nativeElement, 'background', 'blue')
        // _element.nativeElement.style.color = 'red';
    }

    //dinamic
    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onMouse() {
        this.idElement = this.id;
        // this._renderer.setStyle(this._element.nativeElement, 'background', this.styleColor)
        // this._renderer.setStyle(this._element.nativeElement, 'font-weight', this.styleWaight)
    }

    @HostListener('mouseleave') onLeave() {
        this.idElement = 'nionnonon';
        // this._renderer.setStyle(this._element.nativeElement, 'background', null)
        // this._renderer.setStyle(this._element.nativeElement, 'font-style', null)
    }
}