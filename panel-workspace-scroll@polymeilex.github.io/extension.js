import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class PanelWorkspaceScrollExtension {
    enable() {
        this.scrollEventId = Main.panel.connect('scroll-event', (_actor, event) => Main.wm.handleWorkspaceScroll(event));
    }

    disable() {
        if (this.scrollEventId != null) {
            Main.panel.disconnect(this.scrollEventId);
            this.scrollEventId = null;
        }
    }
}
