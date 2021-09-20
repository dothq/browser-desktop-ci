import { melon } from "../../melon";
import { Step } from "../../step";

export class LinuxDownloadStep extends Step {
    public constructor() {
        super({
            name: "Download",
            description: "Downloading upstream repository..."
        })
    }

    public async run() {
        await melon("download", []);
    }
}