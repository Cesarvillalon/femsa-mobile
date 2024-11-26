

// Instantiate the ViewModel
const viewModel = new ProductCatalogViewModel();

// Add observer to update the view when the ViewModel changes
viewModel.addObserver(() => renderProductList(viewModel));

// Add some initial products
viewModel.addProduct(new Product(1, 'Apple', 0.5, 100));
viewModel.addProduct(new Product(2, 'Banana', 0.3, 150));

// Simulate updating product quantity after 2 seconds
setTimeout(() => {
    viewModel.updateQuantity(1, 80); // Update the quantity of 'Apple' to 80
}, 2000);
