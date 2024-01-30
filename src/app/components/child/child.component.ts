import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { NgContentExampleComponent } from '../ng-content-example/ng-content-example.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  // @ContentChild('selector') propertyName: dateType;

  @ContentChild('tag') paragraph!: ElementRef<HTMLParagraphElement>;
  //   @ContentChild('tag', { static: true })
  //   paragraph!: ElementRef<HTMLParagraphElement>;
  //   @ContentChild('tag', { read: TemplateRef })
  //   paragraph!: ElementRef<HTMLParagraphElement>;
  @ContentChild(TemplateRef) template!: TemplateRef<HTMLParagraphElement>;
  @ContentChild(NgContentExampleComponent)
  component!: NgContentExampleComponent;
  //   @ContentChild('descendants', { descendants: false })
  //   component!: NgContentExampleComponent;

  @ContentChildren(NgContentExampleComponent)
  allChildren!: QueryList<NgContentExampleComponent>;

  //   ngOnInit() {
  //     this.paragraph && console.log('ngOnInit paragraph', this.paragraph);
  //   }

  ngAfterContentInit() {
    this.paragraph && console.log('paragraph', this.paragraph);
    this.template && console.log('template', this.template);
    this.component && console.log('component', this.component);

    this.allChildren && console.log('allChildren', this.allChildren);

    this.component?.getClassName();
  }
}
