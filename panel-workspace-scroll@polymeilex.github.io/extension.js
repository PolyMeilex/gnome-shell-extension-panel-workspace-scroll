import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import Clutter from 'gi://Clutter';

export default class PanelWorkspaceScrollExtension {
    enable() {
        this.scrollEventId = Main.panel.connect('scroll-event', (_actor, event) => Main.wm.handleWorkspaceScroll(event));

        this.middleClickGesture = new Clutter.ClickGesture({
            required_button: Clutter.BUTTON_MIDDLE,
        });

        this.middleClickGesture.connect('recognize', () => Main.overview.toggle());
        Main.panel.add_action(this.middleClickGesture);
    }

    disable() {
        if (this.scrollEventId != null) {
            Main.panel.disconnect(this.scrollEventId);
            this.scrollEventId = null;
        }
        if (this.clickEventId != null) {
            Main.panel.remove_action(this.middleClickGesture);
            this.clickEventId = null;
        }
    }
}
