// getting root content div element by using query selector
let  root = document.querySelector(".content");
// asyn promise function to get dog image data
async function getImage(){
    try {
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        let data = await response.json();
        let imageUrl = data.message;
        root.innerHTML = `<img src="${imageUrl}" alt="Dog Image Loading..."/>`
    } catch (error) {
        console.log(error)
    }
}
