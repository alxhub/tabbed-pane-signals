import type { TabComponent } from "../tab/tab.component";

export abstract class TabService {
    abstract isVisible(tab: TabComponent): boolean;
}
