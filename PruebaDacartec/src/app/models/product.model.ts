export class Product {
    uuid: string;
    description: string;
    location: string;
    categories: string[];
    details?: any;

    constructor(uuid: string, description: string, location: string, categories: string[]){
        this.uuid = uuid;
        this.description = description;
        this.location = location;
        this.categories = categories;
    }
}
