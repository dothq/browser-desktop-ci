import chalk from "chalk";
import { Step } from "./step";

export class BuildTarget {
    public id: string;
    public name: string;
    public arch: string;
    public audience: any;

    public steps: Step[] = [];

    public currentStep = 0;

    public async run() {
        const log = (msg: string) => {
            console.log(`${msg}\n――――――――――――――――――――――――――――――――――――――――――――――`)
        }

        log(`${chalk.dim(`[0/${this.steps.length}]`)} Setting up ${this.name} build...`);

        for await (const step of this.steps) {
            ++this.currentStep;

            log(`${chalk.dim(`[${this.currentStep}/${this.steps.length}]`)} ${step.description}`)

            await (step as any).run();
        }
    }

    public constructor({
        id,
        name,
        arch,
        audience
    }: {
        id: string,
        name: string,
        arch: string,
        audience: number
    }) {
        this.id = id;
        this.name = name;
        this.arch = arch;
        this.audience = audience;
    }
}