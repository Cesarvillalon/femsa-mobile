// Simulated View: Function to render the product list
function renderProductList(viewModel: ProductCatalogViewModel): void {
    const productListElement = document.getElementById('product-list');
    if (productListElement) {
        // Clear the existing list
        productListElement.innerHTML = '';

        // Get the products from the ViewModel
        const products = viewModel.getProducts();

        // Create list items for each product
        for (const product of products) {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price} - Quantity: ${product.quantity}`;
            productListElement.appendChild(li);
        }
    }
}
