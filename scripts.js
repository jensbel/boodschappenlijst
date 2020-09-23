const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity')


function displayAmount() {
    console.log('aantal producten geweijzigd')
    const productTotalCost = productQuantity[0].value * productPrice[0].innerHTML;
    document.getElementsByClassName('productTotalCost').innerHTML = 1
    

}
