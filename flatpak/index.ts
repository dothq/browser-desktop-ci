import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";

export class FlatpakPkg extends BuildTarget {
    public constructor() {
        super({
            id: "flatpak-package",
            name: "Flatpak (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.Linux
        })
    }
}

new FlatpakPkg();