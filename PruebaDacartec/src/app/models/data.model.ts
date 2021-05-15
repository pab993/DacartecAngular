import { Banner } from './banner.model'
import { Product } from './product.model'
import { Claim } from './claim.model'

export class Data {
    banners: Banner[];
    products: Product[];
    claims: Claim[];

    constructor(banners: Banner[], products: Product[], claims: Claim[]){
        this.banners = banners;
        this.products = products;
        this.claims = claims;
    }
}
