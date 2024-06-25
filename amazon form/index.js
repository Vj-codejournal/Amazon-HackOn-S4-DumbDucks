function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function displayProductId() {
    const productId = getParameterByName('product_id');
    const productName = getParameterByName('product_name');
    const customerName = getParameterByName('customer_name');
    if (productId) {
        document.getElementById('product-id').textContent = productId;
    }
    if (productName) {
        document.getElementById('product-name').textContent = productName;
    }
    if (customerName) {
        document.getElementById('customer-name').textContent = customerName;
    }
}
window.onload = displayProductId;