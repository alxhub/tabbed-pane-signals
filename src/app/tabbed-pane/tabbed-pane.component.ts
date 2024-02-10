import { Component, contentChildren, effect, forwardRef, model } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabService } from './svc';

@Component({
  selector: 'app-tabbed-pane',
  standalone: true,
  imports: [],
  templateUrl: './tabbed-pane.component.html',
  styleUrl: './tabbed-pane.component.css',
  providers: [
    {provide: TabService, useExisting: forwardRef(() => TabbedPaneComponent)},
  ]
})
export class TabbedPaneComponent {

  current = model(0);
  tabs = contentChildren(TabComponent);

  isVisible(tab: TabComponent): boolean {
    return this.tabs()[this.current()] === tab;
  }
}
