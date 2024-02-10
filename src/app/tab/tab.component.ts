import { Component, signal, input, inject } from '@angular/core';
import { TabService } from '../tabbed-pane/svc';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  tabService = inject(TabService);
  visible(): boolean {
    return this.tabService.isVisible(this);
  }
  title = input();
}
