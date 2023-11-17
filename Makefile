
submit:
	cd panel-workspace-scroll@polymeilex.github.io/ && zip -r ~/panelWorkspaceScroll.zip *

install:
	rm -rf ~/.local/share/gnome-shell/extensions/panel-workspace-scroll@polymeilex.github.io
	cp -r panel-workspace-scroll@polymeilex.github.io ~/.local/share/gnome-shell/extensions/

