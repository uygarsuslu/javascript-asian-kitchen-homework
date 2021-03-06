const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

// ********** ??STEN??LENLER ********** //
// Sitedeki i??erik JavaScript'te menu ??eklinde bir dizi i??inde objeler olarak tan??mlanacak.
// Id, title, category, price, img ve desc b??l??mleri olacak.
// ????eri??i istedi??iniz gibi de??i??tirebilirsiniz yaln??z de??i??tirirken kategori isimlerine ekstra dikkat edin.
// Butonlar da js dosyas??ndan gelecek.
// Site i??erisinde map, reduce gibi methodlar?? kullanman??z gerekecek. //Map ile Array ????erisideki Yap??n??n De??i??tirilmesi Video



// men??  elemanlar?? section-center adl?? bir classta tan??mlanm????
let sectionCenter = document.querySelector(".section-center")
//buton elemanlar?? btn-container adl?? bir classta tan??mlanm????
let btnContainer = document.querySelector(".btn-container")

// ********** BUTON OLU??TURMA ********** //
function buttonCreate(btnName) {
    let btn = `<button class="btn btn-outline-dark btn-item" id="${btnName}">${btnName}</button>`
    return btn
} // bu fonksiyon verilen parametreyi kullanarak buton olu??turur/button idsi ve butonun i??inde yazan parametreden gelir

// ********** BUTON EKLEME ********** //
function addButton() {
    btnContainer.innerHTML = `
    ${buttonCreate("All")} 
    ${buttonCreate("Korea")} 
    ${buttonCreate("Japan")} 
    ${buttonCreate("China")} 
    `
    // butonlara dinleyici eklenir //
    document.querySelector("#All").addEventListener("click", allFoods)
    document.querySelector("#Korea").addEventListener("click", koreaFoods)
    document.querySelector("#Japan").addEventListener("click", japanFoods)
    document.querySelector("#China").addEventListener("click", chinaFoods)
}
addButton() // bunu yapmazsak butonlar sayfam??zda g??z??kmez //

// ********** MEN??DEK?? YEMEKLER?? RETURN YAPARAK BU FONKS??YONDAN T??RETT??K ********** //
function createFood(food) {
    let item = `
    <div class="menu-items col-lg-6 col-sm-12">
        <img src="${food.img}" alt="${food.title}" class="photo">
        <div class="menu-info">
            <div class="menu-title">
                <h4>${food.title} Ramen </h4>
                <h4 class="price">${food.price}</h4>
            </div>
            <div class="menu-text">
                ${food.desc}
            </div>
        </div>
    </div>
    `;
    return item
}

// buras?? menu dizisindeki obje bilgilerini createFood fonksiyonuna yollayarak menuleri olu??turur //
// ********** yemekleri filtreleme ********** //
function allFoods() {
    let allMenu = ""  //de??i??keni her seferinde s??f??rlay??p aranan kategoriyi ekleyece??iz!
    menu.map(menu => { //map metodu yerine filter metodu da kullan??labilir.
        allMenu += createFood(menu) //t??m men?? i??in ko??ul bildirmeksizin menu parametresiyle createFood fonksiyonunu ??a????r??r??z
    })
    sectionCenter.innerHTML = allMenu
}

function koreaFoods() {
    let allMenu = " " //de??i??keni s??f??rlamam??z??n nedeni all foods yemeklerinin s??f??rlan??p Korea categorisinin eklenmesi
    menu.map(menu => {
        if (menu.category === "Korea") {
            allMenu += createFood(menu)
        }
    })
    sectionCenter.innerHTML = allMenu
}

function japanFoods() {
    let allMenu = " "
    menu.map(menu => {
        if (menu.category === "Japan") {
            allMenu += createFood(menu)
        }
    })
    sectionCenter.innerHTML = allMenu
}

function chinaFoods() {
    let allMenu = " "
    menu.map(menu => {
        if (menu.category === "China") {
            allMenu += createFood(menu)
        }
    })
    sectionCenter.innerHTML = allMenu
}

allFoods() 
