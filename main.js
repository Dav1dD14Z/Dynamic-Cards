const cardContainer = document.getElementById("cardContainer");
const comicOptions = document.getElementById("comicOptions");
const stats = document.getElementById("stats");
const onlyButton = document.getElementById("onlyProducts");
const comics = [
    {
        category: "Avengers",
        imageURL: "./Images/Cards/Avengers.png",
        price: 12,
        stock: 5
    },
    {
        category: "Spider-Man",
        imageURL: "https://static.posters.cz/image/1300/11784.jpg",
        price: 10,
        stock: 8
    },
    {
        category: "Avengers",
        imageURL: "https://cdn.kobo.com/book-images/330eca49-aa52-4421-a18e-917d42f3a998/1200/1200/False/new-avengers-vol-2-the-sentry.jpg",
        price: 15,
        stock: 3
    },
    {
        category: "Spider-Man",
        imageURL: "https://i.pinimg.com/736x/1a/42/bf/1a42bf51498913d4a2ac972c93b5f107.jpg",
        price: 11,
        stock: 0
    },
    {
        category: "Thor",
        imageURL: "https://i.redd.it/3fe877fw5c341.jpg",
        price: 14,
        stock: 0
    },
    {
        category: "Thor",
        imageURL: "https://static.posters.cz/image/750/80922.jpg",
        price: 13,
        stock: 4
    },
    {
        category: "DeadPool",
        imageURL: "https://m.media-amazon.com/images/I/71EZFFArsZL._AC_UF894,1000_QL80_.jpg",
        price: 9,
        stock: 6
    },
    {
        category: "Spider-Man",
        imageURL: "https://comic-watch.com/wp-content/uploads/2022/03/ASM2022001_Bagley-scaled.jpg",
        price: 10,
        stock: 0
    },
    {
        category: "DeadPool",
        imageURL: "https://static.posters.cz/image/750/103395.jpg",
        price: 8,
        stock: 2
    },
    {
        category: "Avengers",
        imageURL: "https://waltscomicshop.com/cdn/shop/files/avengers-forever-by-jason-aaron-omnibus-phil-jimenez-cover-hc-dm-only-pre-order-991748.jpg?v=1722179944",
        price: 16,
        stock: 1
    },
    {
        category: "Iron Man",
        imageURL: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/oVMAAOSw4Lhgmi~j/$_57.JPG?set_id=8800005007",
        price: 12,
        stock: 0
    },
    {
        category: "Fantastic Four",
        imageURL: "https://i.etsystatic.com/18227704/r/il/cb0137/2038186565/il_570xN.2038186565_clc5.jpg",
        price: 14,
        stock: 5
    },
    {
        category: "Shang-Chi",
        imageURL: "https://comichub.blob.core.windows.net/high/c76d2c28-1a0e-4505-9f22-e3abe374b966.jpg",
        price: 11,
        stock: 7
    },
    {
        category: "Iron Man",
        imageURL: "https://m.media-amazon.com/images/I/81xwGmsJgRL.jpg",
        price: 13,
        stock: 3
    },
    {
        category: "Spider-Man",
        imageURL: "https://m.media-amazon.com/images/I/71GPeneF0rL._AC_UF894,1000_QL80_.jpg",
        price: 10,
        stock: 4
    },
    {
        category: "Captain America",
        imageURL: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608878390/captain-america-the-poster-collection-9781608878390_hr.jpg",
        price: 15,
        stock: 2
    },
    {
        category: "Avengers",
        imageURL: "https://i.ebayimg.com/images/g/4AgAAOSwJiRgmjE6/s-l1200.jpg",
        price: 17,
        stock: 0
    },
    {
        category: "Iron Man",
        imageURL: "https://thehallofcomics.com/cdn/shop/products/IMA15.jpg?v=1640802391",
        price: 14,
        stock: 6
    },
];

const renderCards = array => {
    let cardsHTML = "";
    array.forEach(comic => {
        cardsHTML +=`
            <article class="single"  aria-label="${comic.category} card">
                <figure class="single__imageContainer">
                    <img src="${comic.imageURL}" alt="Thumbnail of ${comic.category}" class="single__image" loading="lazy" decoding="async">
                </figure>
                <div class="single__category">
                    <p aria-label="Comic category">Category: ${comic.category}</p>
                    <p aria-label="Comic price">Price: ${comic.price}</p>
                    <p aria-label="Comic stock">Stock: ${comic.stock === 0 ? "Out of stock" : comic.stock}</p>
                </div>
            </article>
        `;
    });

    cardContainer.innerHTML = cardsHTML;
}

const renderOptions = array => {
    let categories = [...new Set(array.map(comic => comic.category))];
    let optionsHTML = "";

    categories.forEach(category => {
        optionsHTML += `
            <option class="filter__option" value="${category}">${category}</option>
        `;
    })

    optionsHTML = `<option class="filter__option" value="All" selected>All</option>` + optionsHTML;
    comicOptions.innerHTML = optionsHTML;
}

const renderStats = array => {
    const average = array => {
        let sum = array.reduce((acc, current) => acc + current.price,0);
        return (sum / array.length).toFixed(2);
    }
    const totalComics = array => array.length;
    const totalPrice = array => array.reduce((acc, curr) => acc + curr.price, 0);
    
    let statsHTML = `
        <span class="stats__item">Total price: ${totalPrice(array)}</span>
        <span class="stats__item">Price average: ${average(array)}</span>
        <span class="stats__item">Total of comics: ${totalComics(array)}</span>
    `;

    stats.innerHTML = statsHTML;
};

const filterArray = (array, value) => array.filter(comic => comic.category === value);

const main = () => {
    renderOptions(comics);
    renderCards(comics);
    renderStats(comics)

    comicOptions.addEventListener('change', (e) => {
        let categorySelected = e.target.value;
        let filteredArray = filterArray(comics, categorySelected);
        localStorage.setItem('savedArray', JSON.stringify(filteredArray));

        if(categorySelected === "All") {
            renderCards(comics);
            renderStats(comics);
            return;
        }

        renderCards(filteredArray);
        renderStats(filteredArray);
    });

    onlyButton.addEventListener('click', () => {
        let storedArray = localStorage.getItem('savedArray');
        let onlyArray = JSON.parse(storedArray);
        let filteredArray = onlyArray.filter(comic => comic.stock !== 0);
        renderCards(filteredArray);
        renderStats(filteredArray);
    })
}

main()