// const div = document.querySelector('div')
// const electronicsWrapper = document.querySelector('.electronics-card-wrapper');
// electronicsWrapper.innerHTML = '';
// const data = axios('https://fakestoreapi.com/products');
// // data.then(res => {
// //     return res.data
// // }).then(res => {
// //     // console.log(res);
// //     res.map(item => {
// //         console.log(item.category);
// //     })
// // })
// data.then(res => res.data).then(res => {
//     const filtered = res.filter(item => {
//         return item.category === "electronics"
//     })
//     filtered.map(item => {
//         console.log(item);
//         electronicsWrapper.innerHTML += `
//         <div class="card card-my-2">
//                 <div style="padding: 0.5rem; height:280px; border-top-left-radius: inherit; border-top-right-radius: inherit;" class="d-flex align-items-center justify-content-center position-relative">
//                     <div class="my-star-rating">
//                         <span class="my-star-rating-text-1">4.6</span>
//                         <i class="my-star-rating-icon fa-solid fa-star"></i>
//                         <span class="my-star-rating-text-2">(3.9k)</span>
//                     </div>
//                     <img class="love-add" src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist.svg" alt="">
//                     <img class="cart-add-2" src="https://f.nooncdn.com/s/app/com/noon/icons/quick-atc-add-to-cart-grey.svg" alt="">
//                     <img style="height:fit-content;" class="w-100 border-radius-inherit card-img-top" src="${item.image}" class="card-img-top" alt="...">
//                 </div>
//                 <div style="flex-grow:0;" class="p-0 card-body">
//                 <p class="card-text-my m-0">${item.title}….</p>
//                 <div class="d-flex justify-content-start align-items-center ps5-5 ps3-3">
//                     <div class="d-flex align-items-baseline">
//                         <span class="aed">AED</span>
//                         <span class="four-six-nine-zero">${item.price}</span>
//                     </div>
//                     <div class="d-flex align-items-baseline">
//                         <span class="five-zero-nine-nine">5,099</span>
//                         <span class="eight-percent">8%</span>
//                     </div>
//                 </div>
//                 <div class="d-flex align-items-center ps3-3">
//                     <img class="green-bag-img" src="https://f.nooncdn.com/mpcms/EN0001/assets/80299f90-dd89-4c69-a3d3-19c884d5fc05.png" alt="">
//                     <span class="aed">Only 5 left in stock.</span>
//                 </div>
//                 <div class="d-flex ps3-3">
//                     <img class="express-img" src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="">
//                 </div>
//                 </div>
//             </div>
//         `
//     })
// })