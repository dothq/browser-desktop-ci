import { Architectures } from "../architectures";
import { OperatingSystems } from "../operating-systems";
import { BuildTarget } from "../target";

export class AppImgPkg extends BuildTarget {
    public constructor() {
        super({
            id: "appimage-package",
            name: "AppImage (64-bit)",
            arch: Architectures.x86_64,
            audience: OperatingSystems.Linux
        })
    }
}

new AppImgPkg();