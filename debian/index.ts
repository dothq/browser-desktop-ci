import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";

export class DebianPkg extends BuildTarget {
    public constructor() {
        super({
            id: "deb-package",
            name: "Debian (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.Linux
        })
    }
}

new DebianPkg();