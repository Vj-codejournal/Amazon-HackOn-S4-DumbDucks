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
    if (productId) {
        document.getElementById('product-id').textContent = productId;
    } else {
        document.getElementById('product-id').textContent = 'Product ID not found';
    }
}
window.onload = displayProductId;