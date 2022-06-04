

function addedToCart() {
    alert("Item has been added to your cart!");
  }

function wishlist() {
    alert("Item has been added to your Wish list!");
  }




function toggleResponsive(){
    var navbar = document.getElementById("topNav");
    navbar.classList.toggle("responsive");
}

function toggledrop1(){
    var  drop1= document.getElementById("relatedEditions");
    drop1.classList.toggle("drop");
}

function toggledrop2(){
    var  drop2 = document.getElementById("storeAvail");
    drop2.classList.toggle("drop");
}

function toggledrop3(){
    var  drop3= document.getElementById("description");
    drop3.classList.toggle("drop");
}

function toggledrop4(){
    var  drop4 = document.getElementById("aboutAuthor");
    drop4.classList.toggle("drop");
}

function toggledrop5(){
    var  drop5= document.getElementById("review");
    drop5.classList.toggle("drop");
}

function toggledrop6(){
    var  drop6 = document.getElementById("productDetails");
    drop6.classList.toggle("drop");
}

function toggledrop7(){
    var  drop7 = document.getElementById("categories");
    drop7.classList.toggle("drop");
}

function toggledropinfo1(){
    var  dropinfo1 = document.getElementById("storeSpecials");
    dropinfo1.classList.toggle("drop");}


function toggledropinfo2(){
    var  dropinfo2 = document.getElementById("customerInfo");
    dropinfo2.classList.toggle("drop");}

function toggledropinfo3(){
    var  dropinfo3 = document.getElementById("pickUp");
    dropinfo3.classList.toggle("drop");}

function toggledropinfo4(){
    var  dropinfo4 = document.getElementById("delivery");
    dropinfo4.classList.toggle("drop");}

function toggledropinfo5(){
    var  dropinfo5 = document.getElementById("shipAvailability");
    dropinfo5.classList.toggle("drop");}

function toggledropinfo6(){
    var  dropinfo6 = document.getElementById("shippingCost");
    dropinfo6.classList.toggle("drop");}

function toggledropinfo7(){
    var  dropinfo7 = document.getElementById("payment");
    dropinfo7.classList.toggle("drop");}

function toggledropinfo8(){
    var  dropinfo8 = document.getElementById("comments");
    dropinfo8.classList.toggle("drop");}



//remove item from the cart//
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)

// loop through all the remove btn//
for (var i=0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChange)

}



function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChange(event){
    var input = event.target
    //check if input is a number or input value is less than 0//
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for(var i=0; i < cartRows.length; i++ ){
        var cartRows = cartRows[i]
        var priceElement = cartRows.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRows.getElementsByClassName('cart-quantity-input')[0]
        //  console.log(priceElement,quantityElement)//
        //remove the $//
        var price = priceElement.innerText.replace('$', '')
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }

    //round the total number two 2 decimal//
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total


}



//select all the button with .add-cart class//
var carts = document.querySelectorAll('.add-cart');


//loop through all the item in (carts)//
for (var i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers();//attached to a click event//
    })
}

//when refresh the page, the number doesn't disaapear//
function onLoadCartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.querySelector(span.cart).textContent = productNumbers;
    }
}


function cartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');
    //turn string into digit//
    productNumbers = parseInt(productNumbers);

    //shopping cart number display//
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('span.cart').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('span.cart').textContent = 1;
    }
    }

    //call the function first time run the page//
    onLoadCartNumbers();


// input validation //

// prevent page from refresh//
    function validate(e) {
        e.preventDefault();}

