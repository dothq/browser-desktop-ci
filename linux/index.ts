import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";
import { LinuxDownloadStep } from "./steps/download";

export class Linux extends BuildTarget {
    public steps = [
        new LinuxDownloadStep()
    ]

    public constructor() {
        super({
            id: "linux-64",
            name: "Linux (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.Linux
        })
    }
}

(new Linux()).run();