import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer : ViewContainerRef,
    private templareRef : TemplateRef<any>
  ) { }
@Input('appTimes') set render (times : number){
  //ul par xemple est un viewContainer
  this.viewContainer.clear();
  for( let i=0; i<times;i++){
    this.viewContainer.createEmbeddedView(this.templareRef,{
      index : i,
  
    });
     
  }
}
}
