function addOrder() {
            carts.textContent = "";
            let totalAmount = 0;
            if (parseFloat(qty1.value) > 0) {
                var order = qty1.value.toString() + 'pc/s x ' + price1.textContent + '-----' + product1.textContent + '-----Php' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
                carts.textContent += order;
                totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
            }
 total.value = totalAmount.toFixed(2);
            calculateChange();
}
 function calculateChange() {
            let totalAmount = parseFloat(total.value);
            let cashTendered = parseFloat(cash.value);
            if (!isNaN(cashTendered) && cashTendered >= totalAmount) {
                change.value = (cashTendered - totalAmount).toFixed(2);
            } else {
                change.value = "";
            }
        }
        document.getElementById('cash').onkeyup = calculateChange;
