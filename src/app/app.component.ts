import {
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Заголовок';

  //   @ViewChild('selector') property: any;
  //   @ViewChild('paragrath') paragrath!: ElementRef<HTMLParagraphElement>;
  //   @ViewChild('paragrath', { read: ChildComponent })
  //   paragrath!: ElementRef<HTMLParagraphElement>;
  //   @ViewChild('paragrath', { read: ChildComponent, static: true })
  //   paragrath!: ElementRef<HTMLParagraphElement>;
  //   @ViewChild('template') template!: TemplateRef<HTMLParagraphElement>;
  //   @ViewChild(TemplateRef) template!: TemplateRef<HTMLParagraphElement>;
  //   @ViewChild(ChildComponent) component!: ChildComponent;
  //   @ViewChild(ChildComponent, { static: true }) component!: ChildComponent;

  @ViewChildren('paragrath')
  paragrath!: QueryList<ElementRef<HTMLParagraphElement>>;
  @ViewChildren(TemplateRef) template!: QueryList<
    TemplateRef<HTMLParagraphElement>
  >;
  @ViewChildren('paragrath, ChildComponent')
  component!: QueryList<ChildComponent>;

  //   ngOnInit() {
  //     console.log('component ngOnInit', this.component);
  //   }

  ngAfterViewInit() {
    // console.log('paragrath', this.paragrath);
    // console.log('template', this.template);
    // console.log('component', this.component);

    // this.paragrath.nativeElement.textContent = 'qwerty';
    // this.component.name = 'child name from parent';

    this.component.forEach((item) => console.log('item', item));
  }
}
