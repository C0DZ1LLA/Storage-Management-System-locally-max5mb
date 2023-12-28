// scripts.js

function addProduct() {
    var productName = document.getElementById('productName').value;
    var productQuantity = parseInt(document.getElementById('productQuantity').value, 10);
    var bulkPrice = parseFloat(document.getElementById('bulkPrice').value);
    var retailPrice = parseFloat(document.getElementById('retailPrice').value);
    var isBox = document.getElementById('isBox').checked;
    var boxQuantity = isBox ? parseInt(document.getElementById('boxQuantity').value, 10) || 1 : 1; // Default to 1 if not provided

    
    // Calculate cost and profit difference
    var quantityCost = bulkPrice * productQuantity;
    var retailCost = retailPrice * productQuantity;
    var profitDifference = (retailPrice - bulkPrice) * productQuantity;

    // If it's a box, update properties for the box
    if (isBox) {
        productQuantity *= boxQuantity; // Update total quantity
        quantityCost = bulkPrice * productQuantity; // Update total quantity cost
        retailCost = retailPrice * productQuantity; // Update total retail cost
        profitDifference = (retailPrice - bulkPrice) * productQuantity; // Update total profit difference
    }

    // Create a product object
    var product = {
        productName: productName,
        productQuantity: productQuantity,
        bulkPrice: bulkPrice,
        retailPrice: retailPrice,
        quantityCost: quantityCost,
        retailCost: retailCost,
        profitDifference: profitDifference
    };

    // If it's a box, add box-related properties to the new product
    if (isBox) {
        product.isBox = true;
        product.boxQuantity = boxQuantity;
        product.boxBulkPrice = bulkPrice * boxQuantity;
        product.boxRetailPrice = retailPrice * boxQuantity;
    }

    // Get existing products from local storage
    var existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the array
    existingProducts.push(product);

    // Save the updated array back to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    // Update the product list
    updateProductList();

    // Update total profit difference
    updateTotalProfit();
}


function updateProductList() {
    // Get products from local storage
    var storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Display products
    var productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = ''; // Clear previous content

    storedProducts.forEach(function (product) {
        var productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Format numbers only if they are defined and not null
        function formatNumber(number) {
            return number !== undefined && number !== null ? "€" + number.toFixed(2) : "";
        }

        productDiv.innerHTML =
            "<p>Name: " + (product.productName || '') + "</p>" +
            "<p>Quantity: " + (product.productQuantity || '') + "</p>" +
            "<p>Bulk Price: " + formatNumber(product.bulkPrice) + "</p>" +
            "<p>Retail Price: " + formatNumber(product.retailPrice) + "</p>" +
            "<p>Quantity Cost: " + formatNumber(product.quantityCost) + "</p>" +
            "<p>Retail Cost: " + formatNumber(product.retailCost) + "</p>" +
            "<p>Profit Difference: " + formatNumber(product.profitDifference) + "</p>";

        productListDiv.appendChild(productDiv);
    });
}


function updateTotalProfit() {
    // Get products from local storage
    var storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Calculate total profit difference
    var totalProfit = storedProducts.reduce(function (total, product) {
        return total + product.profitDifference;
    }, 0);

    // Update total profit value in the UI
    document.getElementById('totalProfitValue').textContent = totalProfit.toFixed(2);
}

// Initial product list update
updateProductList();
// Initial total profit update
updateTotalProfit();
