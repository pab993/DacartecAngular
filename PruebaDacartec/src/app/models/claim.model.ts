export class Claim {
    title: string;
    order: number;
    text: string;

    constructor(title: string, order: number, text: string){
        this.title = title;
        this.order = order;
        this.text = text;
    }
}
