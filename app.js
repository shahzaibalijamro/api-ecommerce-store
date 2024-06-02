const electronicsWrapper = document.querySelector(".electronics-wrapper");
const mensWrapper = document.querySelector('.mens-wrapper');
const womensWrapper = document.querySelector('.womens-wrapper');
const jeweleryWrapper = document.querySelector('.jewelery-wrapper');
const data = axios("https://fakestoreapi.com/products");
// // data.then(res => {
// //     return res.data
// // }).then(res => {
// //     // console.log(res);
// //     res.map(item => {
// //         console.log(item.category);
// //     })
// // })
data
    .then((res) => res.data)
    .then((res) => {
        const filteredElec = res.filter((item) => {
            // console.log(item.category);
            electronicsWrapper.innerHTML = '';
            return item.category === "electronics";
        });
        filteredElec.map((item) => {
            // console.log(item);
            electronicsWrapper.innerHTML += `
        <div class="col">
            <div class="card text-center justify-content-between h-100 penguin-card-border shadow rounded">
            <div class="h-100 d-flex justify-content-center align-items-center">
                <img style="width: 200px;" src="${item.image}" class="card-img-top penguin-card-img" alt="..." />
            </div>
                <div>
                <div class="card-body">
                    <h5 style="text-overflow: ellipsis;overflow: hidden;height: 48px;" class="card-title">${item.title}</h5>
                    <p class="card-text">
                    ${item.description}
                    </p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
                    <div>
                        <h3 class="price-text-style">${item.price} $</h3>
                    </div>
                    <div>
                        <button type="button" class="btn penguin-btn">
                            <i class="fa fa-shopping-cart"></i> BUY NOW
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
        });
    });
data
    .then(res => res.data)
    .then(res => {
        const filteredMen = res.filter((item) => {
            // console.log(item.category);
            mensWrapper.innerHTML = '';
            return item.category === "men's clothing";
        });
        filteredMen.map((item) => {
            // console.log(item);
            mensWrapper.innerHTML += `
        <div class="col">
            <div class="card text-center justify-content-between h-100 penguin-card-border shadow rounded">
            <div class="h-100 d-flex justify-content-center align-items-center">
                <img style="width: 200px;" src="${item.image}" class="card-img-top penguin-card-img" alt="..." />
            </div>
                <div>
                <div class="card-body">
                    <h5 style="text-overflow: ellipsis;overflow: hidden;height: 48px;" class="card-title">${item.title}</h5>
                    <p class="card-text">
                    ${item.description}
                    </p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
                    <div>
                        <h3 class="price-text-style">${item.price} $</h3>
                    </div>
                    <div>
                        <button type="button" class="btn penguin-btn">
                            <i class="fa fa-shopping-cart"></i> BUY NOW
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
        });        
    });
data
        .then(res => res.data)
        .then(res => {
            const filteredWomen = res.filter((item) => {
                // console.log(item.category);
                womensWrapper.innerHTML = '';
                return item.category === "women's clothing";
            });
            filteredWomen.map((item) => {
                // console.log(item);
                womensWrapper.innerHTML += `
            <div class="col">
                <div class="card text-center justify-content-between h-100 penguin-card-border shadow rounded">
                <div class="h-100 d-flex justify-content-center align-items-center">
                    <img style="width: 200px;" src="${item.image}" class="card-img-top penguin-card-img" alt="..." />
                </div>
                    <div>
                    <div class="card-body">
                        <h5 style="text-overflow: ellipsis;overflow: hidden;height: 48px;" class="card-title">${item.title}</h5>
                        <p class="card-text">
                        ${item.description}
                        </p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
                        <div>
                            <h3 class="price-text-style">${item.price} $</h3>
                        </div>
                        <div>
                            <button type="button" class="btn penguin-btn">
                                <i class="fa fa-shopping-cart"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            `;
            });        
        });
data
    .then(res => res.data)
    .then(res => {
        const filteredJewel = res.filter((item) => {
            // console.log(item.category);
            jeweleryWrapper.innerHTML = '';
            return item.category === "jewelery";
        });
        filteredJewel.map((item) => {
            // console.log(item);
            jeweleryWrapper.innerHTML += `
        <div class="col">
            <div class="card text-center justify-content-between h-100 penguin-card-border shadow rounded">
            <div class="h-100 d-flex justify-content-center align-items-center">
                <img style="width: 200px;" src="${item.image}" class="card-img-top penguin-card-img" alt="..." />
            </div>
                <div>
                <div class="card-body">
                    <h5 style="text-overflow: ellipsis;overflow: hidden;height: 48px;" class="card-title">${item.title}</h5>
                    <p class="card-text">
                    ${item.description}
                    </p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
                    <div>
                        <h3 class="price-text-style">${item.price} $</h3>
                    </div>
                    <div>
                        <button type="button" class="btn penguin-btn">
                            <i class="fa fa-shopping-cart"></i> BUY NOW
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        `;
        });        
    })