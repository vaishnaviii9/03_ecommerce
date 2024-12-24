document.addEventListener('DOMContentLoaded', ()=>{
    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMessage = document.getElementById('empty-cart')
    const cartTotal = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkOutBtn = document.getElementById('checkout-btn')
    const cart =[]

    const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
    },
    {
        id: 2,
        name: "Smartphone Case",
        price: 15.49,
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 45.75,
    },
    {
        id: 4,
        name: "Fitness Tracker",
        price: 79.89,
    },
    {
        id: 5,
        name: "Portable Charger",
        price: 29.99,
    },
    {
        id: 6,
        name: "Gaming Mouse",
        price: 39.95,
    },
    {
        id: 7,
        name: "LED Desk Lamp",
        price: 24.50,
    },
];

    products.forEach(product=>{
        const productDiv= document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML = `
        <span> ${product.name} - $${product.price}</span>
        <button data-id="${product.id}"> Add to Cart </button>
        `
    productList.appendChild(productDiv)
    })

    productList.addEventListener("click", (e)=>{
        if(e.target.tagName=== "BUTTON"){
            // console.log("clicked");

            // console.log(e.target.getAttribute('data-id'));
            const productId = parseInt(e.target.getAttribute('data-id'))
          const product=   products.find(p => p.id === productId)
            // console.log(typeof productId);
            // console.log(product);
            addToCart(product)
            
        }
    })

    function addToCart(product){
        cart.push(product)
        // console.log(cart);
        renderCart()
        
    }
    function renderCart(){
        cartItems.innerHTML =''
        let totalPrice= 0

        if(cart.length> 0){
            emptyCartMessage.classList.add('hidden')
            cartTotal.classList.remove('hidden')
            cart.forEach((item,index)=>{
                // console.log(item.price);
                
                totalPrice+=item.price
                const cartItem= document.createElement('div')
                cartItem.innerHTML =`
                <span>${item.name} - $${item.price.toFixed(2)} </span>
                `
                cartItems.appendChild(cartItem)
                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`
            })
        }
        else{
            emptyCartMessage.classList.remove('hidden')
            totalPriceDisplay.textContent=`$0.00`
        }
    }

    checkOutBtn.addEventListener('click', ()=>{
        
        cart.length=0
        alert("CHECKOUT SUCCESSFULLY...")
        renderCart()
    })
})