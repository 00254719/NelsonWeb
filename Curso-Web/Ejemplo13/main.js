const switchButton = document.querySelector("#switch-button")
const topButton = document.querySelector("#top-button")

let cont = 0;

switchButton.addEventListener("click", () => {
    
});

 topButton.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
 })