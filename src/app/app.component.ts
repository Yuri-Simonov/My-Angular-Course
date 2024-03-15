import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggler: boolean = true;

  @ViewChild('example', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(private viewContainer: ViewContainerRef) {}

  showComponent() {
    this.viewContainer.createComponent(DynamicComponent);
  }

  //   async asyncShowComponent() {
  //     const { DynamicComponent } = await import(
  //       './components/dynamic/dynamic.component'
  //     );
  //     this.viewContainer.createComponent(DynamicComponent);
  //   }

  ngAfterViewInit() {
    const newComponent = this.container.createComponent(DynamicComponent);
    // newComponent.instance.name = 'new name';
    // newComponent.instance.callName();
    newComponent.setInput('name', 'new name');

    const someData = newComponent.instance.callName();
    console.log('someData', someData);
  }
}
