let total = 0;
let itemCount = 0
function addToCart(target) {
    if (itemCount >= 10) {
        return alert("You can't add more than 10 items to the cart !");
    }
    itemCount++;
    const addItems = target.parentNode.childNodes[1].innerText;
    const container = document.getElementById('container');
    const createLi = document.createElement('li');
    createLi.innerText = addItems;
    container.appendChild(createLi);

    const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
    total = parseInt(total) + parseInt(price);
    const totalElement = document.getElementById('total');
    totalElement.innerText = total;

}