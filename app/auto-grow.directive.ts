import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: { //host - subscribe to events raised from this element
        '(focus)' : 'onFocus()', //binds onFocus method to the focus event
        '(blur)' : 'onBlur()' // binds onBlur method to the blur event
    }
})

export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer){

    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
    }

}