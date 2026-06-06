import { Product } from "../products/product";
import { Service, signal } from "@angular/core";

@Service()
export class CartService {
    private readonly cartItems = signal<Product[]>([]);

    addToCart(product: Product) {
        this.cartItems.update((items) => [...items, product]);
    }
}
