<?php
// display_products.php

// Get existing products from local storage
$existingProducts = json_decode(file_get_contents("products_local.json"), true) ?: [];

// Display products with bulk price, retail price, and cost
if (!empty($existingProducts)) {
    foreach ($existingProducts as $product) {
        echo "<div class='product'>";
        echo "<p>Name: {$product['productName']}</p>";
        echo "<p>Quantity: {$product['productQuantity']}</p>";
        echo "<p>Bulk Price: $" . $product['bulkPrice'] . "</p>";
        echo "<p>Retail Price: $" . $product['retailPrice'] . "</p>";
        echo "<p>Quantity Cost: $" . $product['quantityCost'] . "</p>";
        echo "<p>Retail Cost: $" . $product['retailCost'] . "</p>";
        echo "<p>Profit Difference: $" . $product['profitDifference'] . "</p>";

        echo "</div>";
    }
} else {
    echo "No products available";
}
?>
