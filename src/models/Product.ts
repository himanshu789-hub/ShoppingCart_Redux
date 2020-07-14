import { IProduct } from "../interfaces/IProducts";

export class Product implements IProduct{
    Id: number;
    Name: string;
    Image: string;
    Price: number;
    constructor() {
        this.Id = 0;
        this.Image = "";
        this.Name = "",
        this.Price = 0;
    }
}