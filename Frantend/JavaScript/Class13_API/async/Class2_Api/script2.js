// Show the random Dog images
let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async () => {
    let link = await getDog();
    let result = document.querySelector("#im")
    result.setAttribute("src", link);
    console.log(link);


});
async function getDog() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("Error === :", e);
        return "Not found ";
    }

}

