
// ViewModel: ProductCatalogViewModel
class ProductCatalogViewModel {
    private products: Product[];
    private observers: (() => void)[];

    constructor() {
        this.products = [];
        this.observers = [];
    }

    // Method to add a product
    addProduct(product: Product): void {
        this.products.push(product);
        this.notifyObservers();
    }

    // Method to update product quantity
    updateQuantity(productId: number, newQuantity: number): void {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.quantity = newQuantity;
            this.notifyObservers();
        }
    }

    // Method to get the products
    getProducts(): Product[] {
        return this.products;
    }

    // Observer Pattern methods
    addObserver(observer: () => void): void {
        this.observers.push(observer);
    }

    removeObserver(observer: () => void): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    private notifyObservers(): void {
        for (const observer of this.observers) {
            observer();
        }
    }
}
