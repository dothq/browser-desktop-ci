import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";

export class Windows extends BuildTarget {
    public constructor() {
        super({
            id: "windows-64",
            name: "Windows (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.Windows
        })
    }
}

new Windows();