import execa from "execa";

export const exec = async (command: string, flags: any[]) => {
    return new Promise((res) => {
        const proc = execa(
            command,
            [...flags],
            {
                env: {
                    CI: "true"
                }
            }
        );

        proc.stdout?.pipe(process.stdout);

        proc.on("close", (exit: number) => {
            res(exit);
        })
    })
}