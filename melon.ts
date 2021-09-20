import execa from "execa";
import { resolve } from "path";

export const melon = async (command: string, flags: any[]) => {
    return new Promise((res) => {
        const proc = execa(
            resolve(process.cwd(), "melon"),
            [
                command,
                ...flags
            ]
        );

        proc.stdout?.pipe(process.stdout);

        proc.on("close", (exit: number) => {
            res(exit);
        })
    })
}