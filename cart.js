const countEl = document.querySelector(".count")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const addToCartBtn = document.querySelector(".add-to-cart")
const cartItems = document.querySelector(".cart-items")
const cartIcon = document.querySelector(".cart-icon")
const cartCount = document.querySelector(".cart-count")
const cartContainer = document.querySelector(".cart-container")
const checkoutBtn = document.querySelector(".checkout")
let productPriceEl = document.querySelector(".current-price")

let count = 0
let cartValue = 0
function updateCount(newCount) {
  count = newCount
  countEl.textContent = count
  updateProductPrice(count)
}

plus.addEventListener("click", () => {
  updateCount(count + 1)
})

minus.addEventListener("click", () => {
  if (count === 0) return
  updateCount(count - 1)
})

cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("active")
})

cartCount.addEventListener("click", () => {
  cartContainer.classList.toggle("active")
})

function reverseEmptyCartItems() {
  cartItems.classList.remove("empty")
  checkoutBtn.classList.remove("empty")
}
function emptyCartItems() {
  cartItems.classList.add("empty")
  checkoutBtn.classList.add("empty")
}



let productPrice = parseFloat(productPriceEl.textContent.replace("$", ""))

function updateProductPrice(count) {
  let result = productPrice * count
  if (count <= 0) productPriceEl.innerHTML = `$ ${productPrice.toFixed(2)}`
  else productPriceEl.innerHTML = `$ ${result.toFixed(2)}`
}

addToCartBtn.addEventListener("click", () => {
  if (count === 0) return
  let productImage = document
    .querySelector(".default .main-img img")
    .getAttribute("src")
  let productName = document.querySelector(".product-name").textContent
  let price = productPrice
  updateCartItems(productName, price, productImage)
  cartValue += count
  cartCount.textContent = cartValue

  updateCount(0)
  updateProductPrice(count)
})

function updateCartItems(name, price, img) {
  reverseEmptyCartItems()

  let updatedPrice = price * count
  let cartItem = document.createElement("div")
  cartItem.classList.add("cart-item")
  cartItem.dataset.count = count
  cartItem.innerHTML = `
       <img src="${img}" alt="${name}"/>
       <div class="product-info">
          <h4>${name}</h4>
          <div> 
             <span>$${price} x ${count}</span>
             <span class="updatedPrice">$${updatedPrice.toFixed(2)}</span>
          </div>
       </div>
       <button  class="delete-cart">
          <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
       </button>
    `

  cartItems.append(cartItem)
  let deleteBtn = cartItem.querySelector(".delete-cart")
  deleteBtn.onclick = (e) => {
    let cartItem = e.target.closest(".cart-item")
    removeCartItem(cartItem)
  }
}

function removeCartItem(cartItem) {
   let count = +cartItem.dataset.count;
   cartValue -= count
   cartCount.textContent = cartValue;
   console.log(count)
   cartItem.remove()
   if(cartValue == 0){
    emptyCartItems();
   }
}
