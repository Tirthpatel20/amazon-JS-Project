export const deliveryOptions = [{
    id : '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 400
},{
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliverOption (deliveryOptionId) {
    let deliveryOption; 
    
    deliveryOptions.forEach((deliveryOptioni) => {
        if (deliveryOptioni.id === deliveryOptionId) {
            deliveryOption = deliveryOptioni;
        }
    });
    return deliveryOption || deliveryOptions[0];
}