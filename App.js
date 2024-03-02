const brandDiv = document.getElementById("brands");
const loadData = async() => {
	const res = await fetch('https://cosmetics-backend-server.vercel.app/brands');
	const data = await res.json()
	showBrands(data);
}
loadData()
// step - 1
const showBrands = (brands) => {
//    console.log(brands);
   const brandDiv = document.getElementById("brands");
   brands.forEach(users => {
	// console.log(users);
	let item = document.createElement('div')
  item.classList= "card card-compact bg-base-100 shadow-xl"
	item.innerHTML = `
  <figure class= "h-60 w-full borde overflow-hidden">
  <img class = "h-full w-full border hover:scale-105 transition-all duration-700" src=${users.brand_logo} alt="Shoes" />
  </figure>
  <div class="card-body text-center">
    <h2 class="card-title ">${users.brand_name}</h2>
  </div>
	`
  brandDiv.appendChild(item)
   }); 
}

// product show 
const loadProduct = async() => {
  const res = await fetch('https://cosmetics-backend-server.vercel.app/product');
  const data = await res.json()
  showProducts(data);
};
loadProduct()
// step - 2
function showProducts(product) {
  console.log(product);
  const productDiv = document.getElementById('products');
  product = product.slice(0,5)
  for(let products of product) {
    // console.log(products);
    let productItem = document.createElement('div')
    productItem.classList = "card card-compact bg-base-100 shadow-xl"
    productItem.innerHTML= `
    <figure class="h-52 ">
    <img class="w-full h-full hover:scale-105 duration-700 transition" src=${products.photo} alt="Shoes" />
    </figure>
    `
  productDiv.appendChild(productItem)
  };
}

// card show 

//   fetch('https://cosmetics-backend-server.vercel.app/cart')
//   .then(res => res.json())
//   .then(data =>showCard(data))

//   const showCard = (card) => {
//   // console.log(card);
//   const cardDiv = document.getElementById('card');
//   for(let cards of card) {
//     console.log(cards);
//     let cardItem = document.createElement('div')
//     cardItem.innerHTML= `
//     <div class="card card-compact w-96 bg-base-100 shadow-xl">
//   <figure><img src=${cards.photo} alt="Shoes" /></figure>
//   <div class="card-body">
//     <h2 class="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//     `
//     cardDiv.appendChild(cardItem)
//   }
//   }