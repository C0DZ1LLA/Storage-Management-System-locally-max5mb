<?php
// add_product_local.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form
    $productName = $_POST["productName"];
    $productQuantity = $_POST["productQuantity"];
    $bulkPrice = $_POST["bulkPrice"];
    $retailPrice = $_POST["retailPrice"];

    // Calculate cost and profit difference
    $quantityCost = $bulkPrice * $productQuantity;
    $retailCost = $retailPrice * $productQuantity;
    $profitDifference = ($retailPrice - $bulkPrice) * $productQuantity;

    // If it's a box, double the profit difference
    if (isset($_POST["isBox"]) && $_POST["isBox"] == "true") {
        $profitDifference *= 2;
    }

    // Save product details to products_local.json
    $newProduct = array(
        "productName" => $productName,
        "productQuantity" => $productQuantity,
        "bulkPrice" => $bulkPrice,
        "retailPrice" => $retailPrice,
        "quantityCost" => $quantityCost,
        "retailCost" => $retailCost,
        "profitDifference" => $profitDifference
    );

    // Get existing products from local storage
    $existingProducts = json_decode(file_get_contents("products_local.json"), true) ?: [];

    // Add the new product to the array
    $existingProducts[] = $newProduct;

    // Save the updated array back to local storage
    file_put_contents("products_local.json", json_encode($existingProducts));

    echo "Product added successfully.";
}
?>
