
const productPrice = document.getElementsByClassName('productPrice');
const productQuantity = document.getElementsByClassName('productQuantity')


function displayAmount() {
    console.log('aantal producten geweijzigd')
    const productTotalCost = productQuantity[0].value * productPrice[0].innerHTML;
    document.getElementsByClassName('productTotalCost').innerHTML = 1
    

}
const productPrice = document.getElementsByClassName('productPrice')
const productQuantity = document.getElementsByClassName('productQuantity')


function displayAmount0() {
    let productTotalCost = parseFloat(productPrice[0].innerHTML) * productQuantity[0].value
    document.getElementsByClassName('productTotalCost')[0].innerHTML = productTotalCost;
    displayTotalAmount();
}

function displayAmount1() {
    let productTotalCost = parseFloat(productPrice[1].innerHTML) * productQuantity[1].value
    document.getElementsByClassName('productTotalCost')[1].innerHTML = productTotalCost;
    displayTotalAmount();
}

function displayAmount2() {
    let productTotalCost = parseFloat(productPrice[2].innerHTML) * productQuantity[2].value
    document.getElementsByClassName('productTotalCost')[2].innerHTML = productTotalCost;
    displayTotalAmount();
}

function displayAmount3() {
    let productTotalCost = parseFloat(productPrice[3].innerHTML) * productQuantity[3].value
    document.getElementsByClassName('productTotalCost')[3].innerHTML = productTotalCost;
    displayTotalAmount();
}; 

function displayTotalAmount() {
    let productTotalCost = document.getElementsByClassName('productTotalCost')
    let totalCost = parseFloat(productTotalCost[0].innerHTML) + parseFloat(productTotalCost[1].innerHTML) + parseFloat(productTotalCost[2].innerHTML) + parseFloat(productTotalCost[3].innerHTML);
    document.getElementsByClassName('totalCost')[0].innerHtml = totalCost;
    console.log(totalCost)
};
