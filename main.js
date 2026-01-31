const listOfMovies = [
    {
        gender: "Avengers",
        imageURL: "./Images/Cards/Avengers.png"
    },
    {
        gender: "Spider-Man",
        imageURL: "https://static.posters.cz/image/1300/11784.jpg"
    },
    {
        gender: "Avengers",
        imageURL: "https://cdn.kobo.com/book-images/330eca49-aa52-4421-a18e-917d42f3a998/1200/1200/False/new-avengers-vol-2-the-sentry.jpg"
    },
    {
        gender: "Spider-Man",
        imageURL: "https://i.pinimg.com/736x/1a/42/bf/1a42bf51498913d4a2ac972c93b5f107.jpg"
    },
    {
        gender: "Thor",
        imageURL: "https://i.redd.it/3fe877fw5c341.jpg"
    },
    {
        gender: "Thor",
        imageURL: "https://static.posters.cz/image/750/80922.jpg"
    },
    {
        gender: "DeadPool",
        imageURL: "https://m.media-amazon.com/images/I/71EZFFArsZL._AC_UF894,1000_QL80_.jpg"
    },
    {
        gender: "Spider-Man",
        imageURL: "https://comic-watch.com/wp-content/uploads/2022/03/ASM2022001_Bagley-scaled.jpg"
    },
    {
        gender: "DeadPool",
        imageURL: "https://static.posters.cz/image/750/103395.jpg"
    },
    {
        gender: "Avengers",
        imageURL: "https://waltscomicshop.com/cdn/shop/files/avengers-forever-by-jason-aaron-omnibus-phil-jimenez-cover-hc-dm-only-pre-order-991748.jpg?v=1722179944"
    },
    {
        gender: "Iron Man",
        imageURL: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/oVMAAOSw4Lhgmi~j/$_57.JPG?set_id=8800005007"
    },
    {
        gender: "Fantastic Four",
        imageURL: "https://i.etsystatic.com/18227704/r/il/cb0137/2038186565/il_570xN.2038186565_clc5.jpg"
    },
    {
        gender: "Shang-Chi",
        imageURL: "https://comichub.blob.core.windows.net/high/c76d2c28-1a0e-4505-9f22-e3abe374b966.jpg"
    },
    {
        gender: "Iron Man",
        imageURL: "https://m.media-amazon.com/images/I/81xwGmsJgRL.jpg"
    },
    {
        gender: "Spider-Man",
        imageURL: "https://m.media-amazon.com/images/I/71GPeneF0rL._AC_UF894,1000_QL80_.jpg"
    },
    {
        gender: "Captain America",
        imageURL: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608878390/captain-america-the-poster-collection-9781608878390_hr.jpg"
    },
    {
        gender: "Avengers",
        imageURL: "https://i.ebayimg.com/images/g/4AgAAOSwJiRgmjE6/s-l1200.jpg"
    },
    {
        gender: "Iron Man",
        imageURL: "https://thehallofcomics.com/cdn/shop/products/IMA15.jpg?v=1640802391"
    },
];

const filter = document.getElementById("comic-filter");

const printArrays = array => {
    let cardContainer = document.getElementById("cardContainer");
    let cardsHTML = "";

    array.forEach(comic => {
    cardsHTML +=`
        <article class="single"  aria-label="${comic.gender} card">
            <figure class="single__imageContainer">
                <img src="${comic.imageURL}" alt="Thumbnail of ${comic.gender}" class="single__image" loading="lazy" decoding="async">
            </figure>
            <span class="single__category" aria-label="Gender of the comic">${comic.gender}</span>
        </article>
        `
    });

    cardContainer.innerHTML = cardsHTML;
}

const filterSingleArray = (array, selectedValue) => {
    let newArray = array.filter(comic => comic.gender === selectedValue);
    return newArray;
}

const filterFunction = (array, selectedValue) => {
    let filteredArray = filterSingleArray(array, selectedValue);
    printArrays(filteredArray);
}

const main = () => {
    printArrays(listOfMovies)

    filter.addEventListener("change", function(event) {
        let selectedValue = event.target.value;

        if (selectedValue === "Total") {
            printArrays(listOfMovies);
            return;
        }

        filterFunction(listOfMovies, selectedValue);
    });
};

main();