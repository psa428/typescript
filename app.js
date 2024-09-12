"use strict";
const totalPrice = (obj) => {
    let pay;
    if (obj.isInstallment)
        pay = obj.price * (1 - obj.discount / 100) / obj.months;
    else
        pay = obj.price * (1 - obj.discount / 100);
    return pay; // Your code here...
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
