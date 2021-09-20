export class Step {
    public name: string;
    public description: string;

    public constructor({
        name,
        description
    }: {
        name: string,
        description: string
    }) {
        this.name = name;
        this.description = description;
    }
}