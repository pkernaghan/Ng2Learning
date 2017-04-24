import {Component} from 'angular2/core'

@Component({
    selector: 'favourite',
    template: `
                <i
                 class='glyphicon'
                 [class.glyphicon-star-empty]="!isFavourite"
                 [class.glyphicon-star]="isFavourite"
                 >
                 </i>
                `,
     host: { //host - subscribe to events raised from this element
         '(click)' : 'onClick()' //binds onFocus method to the focus event
     }
})

export class FavouriteComponent {

    constructor(){
        this.isFavourite = false;
     }

     isFavourite: boolean

     onClick(){
        this.isFavourite = !this.isFavourite;
     }

}

