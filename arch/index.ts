import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";

export class ArchPkg extends BuildTarget {
    public constructor() {
        super({
            id: "arch-package",
            name: "Arch (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.Linux
        })
    }
}

new ArchPkg();