import * as basicLightbox from 'basiclightbox'

const products = [
    {
        desc: "Darknet",
        url: "https://github.com/danilT9/product-list/blob/main/public/datas/back1.png?raw=true",
    },
    {
        desc: "OS X",
        url: "https://github.com/danilT9/product-list/blob/main/public/datas/back2.png?raw=true",
    },
    {
        desc: "Full Moon",
        url: "https://github.com/danilT9/product-list/blob/main/public/datas/back3.png?raw=true",
    },
    {
        desc: "Nature",
        url: "https://github.com/danilT9/product-list/blob/main/public/datas/back4.png?raw=true",
    },
    {
        desc: "Galaxy",
        url: "https://github.com/danilT9/product-list/blob/main/public/datas/back5.png?raw=true",
    },
    {
        desc: "Red Lotus",
        url: "https://github.com/danilT9/product-list/blob/main/public/datas/back6.png?raw=true",
    },
]

const page = document.body;
const productList = document.getElementById("list");
const dynamicalHtml = products.map(product => `
<li>
    <button class="img-button" data-url="${product.url}" style="background: url('${product.url}') center/cover no-repeat; border: none;"></button>
    <p>${product.desc}</p>
</li>
`).join('');
list.insertAdjacentHTML("beforeend", dynamicalHtml);

productList.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() == "button") {
        const url = e.target.dataset.url;
        const instance = basicLightbox.create(`
            <div style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0,0,0,0.6);
                position: fixed;
                top: 0;
                left: 0;
            ">
                <div style="
                    width: 90%;
                    height: 90%;
                    background: url('${url}') center/cover no-repeat;
                    background-size: cover;
                "></div>
            </div>
        `);
        page.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                instance.close();
            }
        });
        instance.show();
    }
});