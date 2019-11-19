const cart = [];

function addToCart(item) {
    cart.push(item);

    return cart;
}

const item = {
    description: 'widget',
    price: 19.99,
    quantity: 2,
};

// Every time we call addToCart the global cart
// object changes
addToCart(item);

console.log(cart);
// [{
//    description: 'widget',
//    price: 19.99,
//    quantity: 2,
// }]