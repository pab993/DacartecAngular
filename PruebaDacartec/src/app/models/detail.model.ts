export class Detail {
    features: Feature[];
    images: string[];
    uuid: string;

    constructor(features: Feature[], images: string[], uuid: string){
        this.features = features;
        this.images = images;
        this.uuid = uuid;
    }
}

export class Feature{
    order: number;
    important: boolean;
    text: string;

    constructor(order: number, important: boolean, text: string){
        this.order = order;
        this.important = important;
        this.text = text;
    }
}
