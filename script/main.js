const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
// desktop menu
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    menuDesktop.classList.toggle('inactive');
    if (shoppingCartContainer.classList.contains('inactive') == false) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (productDetailContainer.classList.contains('inactive') == false) {
        productDetailContainer.classList.add('inactive');
    }
}
// mobile menu
const btnMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

btnMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive');
    if (shoppingCartContainer.classList.contains('inactive') == false) {
        shoppingCartContainer.classList.toggle('inactive');
    }
    if (productDetailContainer.classList.contains('inactive') == false) {
        productDetailContainer.classList.add('inactive');
    }
}
// shopping cart
const btnCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

btnCartIcon.addEventListener('click', toggleshoppingCartContainer);

function toggleshoppingCartContainer() {
    shoppingCartContainer.classList.toggle('inactive');
    if (menuMobile.classList.contains('inactive') == false) {
        menuMobile.classList.toggle('inactive');
    }
    if (menuDesktop.classList.contains('inactive') == false) {
        menuDesktop.classList.toggle('inactive');
    }
    if (productDetailContainer.classList.contains('inactive') == false) {
        productDetailContainer.classList.add('inactive');
    }
}
const productList = [];
const addProduct = (product) => {
    productList.push({
        name: product.name,
        price: product.price,
        image: product.image,
    })
}
addProduct({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
addProduct({
    name: 'Antique phone',
    price: 60,
    image: 'https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
addProduct({
    name: 'Toys',
    price: 5,
    image: 'https://images.pexels.com/photos/3663060/pexels-photo-3663060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

addProduct({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
addProduct({
    name: 'Umbrella',
    price: 25,
    image: 'https://images.pexels.com/photos/1844746/pexels-photo-1844746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

addProduct({
    name: 'Pants',
    price: 70,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
addProduct({
    name: 'Pc Gaming',
    price: 520,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
addProduct({
    name: "Women's red sweater",
    price: 20,
    image: 'https://images.pexels.com/photos/4778620/pexels-photo-4778620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
addProduct({
    name: 'Sofa',
    price: 420,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
addProduct({
    name: 'Tent camping',
    price: 290,
    image: 'https://images.pexels.com/photos/6324131/pexels-photo-6324131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
addProduct({
    name: 'Christmas tree decorations',
    price: 30,
    image: 'https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.sort(function () { return Math.random() - 0.5 });
{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div> */}
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}
// Si el usuario hace scroll de 60 px hacia abajo, se cambia la clase de un contendor
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector("#productDetail").classList.add('aside-scroll');
    } else {
        document.querySelector("#productDetail").classList.remove('aside-scroll');
    }
}

function renderProducts(arr) {
    for (product of productList) {
        // product cart
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');

        cardsContainer.append(productCart);
        // img
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);

        function openProductDetailAside() {
            productDetailContainer.classList.remove('inactive');
            if (shoppingCartContainer.classList.contains('inactive') == false) {
                shoppingCartContainer.classList.toggle('inactive');
            }
            if (menuDesktop.classList.contains('inactive') == false) {
                menuDesktop.classList.toggle('inactive');
            }
            if (menuMobile.classList.contains('inactive') == false) {
                menuMobile.classList.toggle('inactive');
            }
        }

        productCart.append(img);
        // product info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        productCart.append(productInfo);

        // product info div
        const productInfoDiv = document.createElement('div');
        productInfo.append(productInfoDiv);

        const productPrice = document.createElement('p');
        const productName = document.createElement('p');

        productInfoDiv.append(productPrice, productName);

        const priceText = document.createTextNode('$' + product.price + ',00');
        const nameText = document.createTextNode(product.name);
        productPrice.append(priceText);
        productName.append(nameText);


        const productInfoFigure = document.createElement('figure');
        productInfo.append(productInfoFigure);
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.append(productImgCart);
    }
}
renderProducts(productList);


