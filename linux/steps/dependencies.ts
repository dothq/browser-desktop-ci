import { exec } from "child_process";
import { Step } from "../../step";

export class LinuxDependenciesStep extends Step {
    public constructor() {
        super({
            name: "Download",
            description: "Downloading upstream repository..."
        })
    }

    public run() {
        exec(`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`);

        exec(`cargo install cbindgen sccache`);
        exec(`sudo apt-get install -y libpulse-dev clang libpango1.0-dev nasm m4 build-essential libgtk-3-dev glib-2.0 gtk+-2.0 libdbus-glib-1-dev libx11-dev libx11-xcb-dev`);
    }
}