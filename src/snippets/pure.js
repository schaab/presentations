const cart = [];

function addToCart(cart, item) {
    return [...cart, item];
};

const item = {
    description: 'widget',
    price: 19.99,
    quantity: 2,
};

// This can be called as many times as we want
// As long as we pass it the same cart and the same
// item the result will always be the same
// a cart with 1 item
addToCart(cart, item);

console.log(cart); // []
console.log(addToCart(cart, item));
// [{
//    description: 'widget',
//    price: 19.99,
//    quantity: 2,
// }]