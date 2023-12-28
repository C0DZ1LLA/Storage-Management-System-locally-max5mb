<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Storage Management System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Storage Management System</h1>

        <!-- Product Form -->
        <form id="productForm">
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required>

            <label for="productQuantity">Quantity:</label>
            <input type="number" id="productQuantity" name="productQuantity" required>

            <label for="bulkPrice">Bulk Price:</label>
            <input type="number" id="bulkPrice" name="bulkPrice" step="0.01" required>

            <label for="retailPrice">Retail Price:</label>
            <input type="number" id="retailPrice" name="retailPrice" step="0.01" required>

            <label for="isBox">Box:</label>
            <input type="checkbox" id="isBox" name="isBox">
            
            <!-- Box Quantity input -->
            <label for="boxQuantity">Box Quantity:</label>
            <input type="number" id="boxQuantity" name="boxQuantity" min="1">

            <button type="button" onclick="addProduct()">Add Product</button>
        </form>

        <!-- Display Products -->
        <div id="productList">
            <!-- Product details will be displayed here -->
        </div>

        <!-- Total Profit Difference -->
        <div id="totalProfit">
            <p>Total Profit Difference: $<span id="totalProfitValue">0.00</span></p>
        </div>
    </div>

    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- Include Local Scripts -->
    <script src="scripts.js"></script>
</body>
</html>
