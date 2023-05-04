// create logic for checkout system, return total cost of all refills (including if has coupon)

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

calculateCost1(refillTotal, subscriptionDiscount = 0.25, couponDiscount = 10) {
    grandtotal = refilTotal + (refillTotal *subasciptionDiscount) - (couponDiscount)
    return grandTotal
}

// checkoutSystem(customer) => 
//         - totalCost = customer.pricePerRefill * refills;
//         - customerHasSubscription = customer.subscription;
//         - customerHasCoupon = customer.coupon;
//         - if (customerHasSubscription && customerHasCoupon) 
//             - return calculateCost1(totalCost)
//         - else if (customerHasCoupon && !customerHasSubscriptiojn)
//             - return calcCost2(totalCost)
//         - else if (customerHasSubscriptioj && !customerHasCoupon)
//             - return calcCost3(totalCost)
//         else if (!customerHasSubscription && !customerHasCoupon)
//             - return totalCost

calculateCost2(refillTotal, subscriptionDiscount = 0, couponDiscount = 10) {
     grandtotal = refillTotal + (refillTotal * subscriptionDiscount) - (couponDiscount)
        return grandTotal 
}

calculateCost3(refillTotal, subscriptionDiscount = 0.25, couponDiscount = 0) {
    grandtotal = refillTotal + (refillTotal * subscriptionDiscount) - (couponDiscount)
    return grandTotal
}