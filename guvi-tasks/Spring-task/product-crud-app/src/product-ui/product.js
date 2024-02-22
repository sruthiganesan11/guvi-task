// Function to submit product form
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addProduct();
});

// Function to add product
function addProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;

    fetch('/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: productName,
            price: productPrice,
            category: productCategory
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Redirect to display products page after adding product
        window.location.href = '/displayProducts';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
