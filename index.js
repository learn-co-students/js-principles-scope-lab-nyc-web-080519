var customerName = "bob";
const leastFavoriteCustomer = "someone";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
};

function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
};

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    return bestCustomer;
};

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "someone else";
};