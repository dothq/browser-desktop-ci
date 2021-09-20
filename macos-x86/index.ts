import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";

export class MacOSx86 extends BuildTarget {
    public constructor() {
        super({
            id: "macos-x86",
            name: "MacOS x86 (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.MacOS
        })
    }
}

new MacOSx86();