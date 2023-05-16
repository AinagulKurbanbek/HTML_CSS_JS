let phone = [
    {
        id: "1",
        name:"High-Back Bench",
        price: 990,
        company:'Ikea',
        img: "first.jpeg"
    },
    {
        id: "2",
        name:"Accent Chair",
        price:250,
        company:'Marcos',
        img: "second.jpeg"
    },
    {
        id: "3",
        name:"Dining Table",
        price: 699,
        company:'caressa',
        img: "third.jpeg"
    },
    {
        id: "4",
        name:"Wooden Table",
        price: 999,
        company:'caressa',
        img: "third1.jpeg"
    },
    {
        id: "5",
        name:"Dining Table",
        price:259,
        company:'caressa',
        img: "four1.jpeg"
    },
    {
        id: "6",
        name:"Sofa Set",
        price: 699,
        company:'liddy',
        img: "five1.jpeg"
    },
    
    
    
    {
        id: "4",
        name:"Modern Bookshelf",
        price: 899,
        company:'marcos',
        img: "four.jpeg"

    },
    {
        id: "5",
        name:"Emperor Bed",
        price: 299,
        company:'liddy',
        img: "five.jpeg"

    },
    {
        id: "6",
        name:"Utopia Sofa",
        price: 399,
        company:'marcos',
        img:"six.jpeg",
    },
    {
        id: "7",
        name:"Entertainment Center",
        price: 299,
        company:'liddy',
        img:"seven.jpeg"
    },
    {
        id: "8",
        name:"Albany Sectional",
        price:199,
        company:'ikea',
        img:"eight.jpeg"
    },
    {
        id: "9",
        name:"Leather Sofa",
        price:999,
        company:'liddy',
        img:"nine.jpeg"
    },
    
]

// let tovar = document.querySelector(".product")

// for(let i = 0;i<phone.length;i++){

//     let product =`
//     <div class="tovar">
//     <img src='./images/${phone[i].img}'>
//     <p>${phone[i].name}</p>
//     <h1>${phone[i].price}</h1>
//     </div>`

//     tovar.innerHTML += product
// }


let tovarFilter = [...phone];
let tovar = document.querySelector(".product") 
let displayProducts = () =>{
    if (tovarFilter.length<1){
        tovar.innerHTML = `<h1>Sorry,not found</h1>`
        return;
    }

    tovar.innerHTML = tovarFilter
    .map((phone) =>{
        const {id,name,img,price} = phone;
        return `
        <div class="tovar" id="${id}">
            <img class="picture" src='./image/${img}'>
            <b class="name">${name}</b>
            <p class="price"><b>$${price}</b> </p>
            <button class= "btn" onclick = "addToCard(${id})">Buy</>
        </div>`
    }) 
   .join('');

};

displayProducts();


const div = document.querySelector('.input');
const searchInput = document.querySelector('.search-input')

div.addEventListener('keyup',() =>{
    const inputValue = searchInput.value;
    tovarFilter = phone.filter((product) => {
        return product.name.toLowerCase().includes(inputValue);
    });
    displayProducts();
});


//Filter button


const companiesDOM = document.querySelector('.companies');

const displayButtons = () =>{
    const buttons = [
        'All',
        ...new Set(phone.map((product) => product.company)),
    ];
    companiesDOM.innerHTML = buttons
    .map((company) =>{
        return `<a href="#" class="company-btn" data-id="${company}">${company}</a>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('company-btn')){
        if (el.dataset.id ==='All'){
            tovarFilter = [...phone];
        } else{
            tovarFilter = phone.filter((product) => {
                return product.company === el.dataset.id;
            });
        }
        searchInput.value = '';
        displayProducts();
    }
});
//registration


let yourname = document.querySelector('.yourname')
let error = document.querySelector('.error')
let mail = document.querySelector('.mail')
let error1 = document.querySelector('.error1')
let pass= document.querySelector('.pass')
let error2 = document.querySelector('.error2')
let pass2= document.querySelector('.pass2')
let error3 = document.querySelector('.error3')
let button = document.querySelector('.reg')

let reg = () =>{
    if (yourname.value == ''){
        error.innerHTML = "Укажите ФИО"
    }
    else if (yourname.value.length<5){
        error.innerHTML = "От 5 до 25 слов"
    }
    else {
        error.innerHTML = " "
    }

}
button.addEventListener("click",reg)

let reg1 = () =>{
    if (mail.value == ''){
        error1.innerHTML = "Укажите E-mail"
    }
    else if (mail.value.length<5){
        error1.innerHTML = "От 5 до 25 слов"
    }
    else if (mail.value =='ainagul@gmail.com') {
        error1.innerHTML = "Верный"
    }
    else{
        error1.innerHTML = "Введите правильный E-mail"
    }
}

button.addEventListener("click",reg1)

let reg2 = () =>{
    if (pass.value == ''){
         error2.innerHTML = "Укажите E-mail"
     }
     else if (pass.value.length<5){
         error2.innerHTML = "От 5 до 25 слов"
     }
     else if ( pass.value == 12345){
         error2.innerHTML = " "
     }
     else{
        error2.innerHTML= "Не правильный пароль"
     }
 }
 
button.addEventListener("click",reg2)


let reg3 =()=>{
    if (pass2.value == ''){
        error3.innerHTML = "Укажите E-mail"
    }
    else if (pass2.value.length<5){
        error3.innerHTML = "От 5 до 25 слов"
    }
    else if (pass2.value == pass.value){
        error3.innerHTML = "Верный"
    }
    else{
        error3.innerHTML= "Не правильный пароль"
    }
 }
 
button.addEventListener("click",reg3)


//korzina
let korzina = document.querySelector('.korzina')
let close = document.querySelector('.close')
let listKorzina =document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let korzina_count = document.querySelector('.korzina-count')


korzina.addEventListener('click',()=>{
    body.classList.add('active');
})
close.addEventListener('click',()=>{
    body.classList.remove('active');
})

window.onclick=function(close){
    if (close.target == close){
        close.classList.remove('active')
    }
}


let listCards = [];
function addToCard(key){
    if (listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(phone[key]));
        listCards[key].korzina_count = 1;

    }
    reloadCard(); //????
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.korzina_count;
        if(value != null){
            let newDiv = document.createElement('li')
            newDiv.innerHTML = `
            <div><img src="image/${value.img}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.korzina_count - 1})">-</button>
                    <div class="count">${value.korzina_count}</div>
                    <button onclick="changeQuantity(${key}, ${value.korzina_count + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = totalPrice.toLocaleString();
    korzina_count.innerText = count;
}

function changeQuantity(key, korzina_count){
    if(korzina_count ==0){
        delete listCards[key];
    }else{
        listCards[key].korzina_count = korzina_count;
        listCards[key].price = korzina_count * phone[key].price;
    }
    reloadCard();
}
