// const searchBar = () => {
//     const search = document.querySelector('.search_bar');
//     const searchLink = document.getElementById('searchBar');

//     searchLink.addEventListener('click', () => {
//         console.log("click")
//         search.classList.toggle('search-active');
//     });
// };
// searchBar();

const loginBar = () => {
    // let login = document.querySelector('.login');
    // let loginLink = document.getElementById('pra');

    // loginLink.addEventListener('click', () => {
    //     login.classList.toggle('login-active')
    // });


    //validation-------------------------
    // let password = document.getElementById('password');
    // let error = document.getElementById('error');
    // let button = document.getElementById('btn');

    // button.addEventListener('click', () => {
    //     console.log("click")
    //     if (password.value.length < 8) {
    //         error.innerText = `Minimum 8 characters needed`;
    //     }
    //     else {
    //         error.innerText = '';
    //         // location.reload()
    //     }
    //     if (password.value === 'password') {
    //         error.innerText = 'Password cant be password'
    //     }
    //     if (password.value == '12345678') {
    //         error.innerText = 'Storng password needed'
    //     }
    // })
    //validation------END-------------------

    //-----------------cartSlide--------------------
    // let cart = document.getElementById('showCart');
    // let cartShow = document.querySelector('.cart1');

    // cart.addEventListener('click', () => {
    //     cartShow.classList.toggle('cart-active');
    // })

    let nav = document.querySelector('#nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle("sticky", window.scrollY > 0);
    });
}
loginBar();