const products = [
    {
        desc: "Darknet",
        url: "datas/back1.png",
    },
    {
        desc: "OS X",
        url: "datas/back2.png",
    },
    {
        desc: "Full Moon",
        url: "datas/back3.png",
    },
    {
        desc: "Nature",
        url: "datas/back4.png",
    },
    {
        desc: "Galaxy",
        url: "/datas/back5.png",
    },
    {
        desc: "Red Lotus",
        url: "datas/back6.png",
    },
]

const productList = document.getElementById("list");
const dynamicalHtml = products.map(product => `
<li>
    <img src="${product.url}">
    <p>${product.desc}</p>
</li>
`).join('');

list.insertAdjacentHTML("beforeend", dynamicalHtml);