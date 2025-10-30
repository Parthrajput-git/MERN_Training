// APL calling help with DOM.
// const div = document.querySelector("#mainbox");
// console.log(div);


// const url = "https://fakestoreapi.com/products/";

async function apiCall() {
    const data = await fetch(url);
    const result = await data.json();

    result.map((item) => {
        div.innerHTML += `<div class="boxdiv">
        <p class="im"><img src="${item.image}"</p>
        <p class="im">${item.category}</p>
        <p> ${item.price}</p>
       </div>`

    });

    console.log(result);
}
apiCall();
























