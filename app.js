
// Get all class woth "theme"
let theme = document.querySelectorAll(".theme");
theme.forEach(botton => {
    botton.addEventListener("click", function(){
        let themeMode = this.dataset.mode;
        setTheme(themeMode)
    })
});

function setTheme(mode) {
    if(mode === "light") {
        document.querySelector("#theme").href = "css/style.css";
    }
    else if(mode === "green") {
        document.querySelector("#theme").href = "css/green.css";
    }
    else if(mode === "purple") {
        document.querySelector("#theme").href = "css/purple.css";
    } 
    else{
        document.querySelector("#theme").href = "css/blue.css";
    }
    localStorage.setItem("theme", mode)

}

let userTheme = localStorage.getItem("theme");

if (!userTheme){
    setTheme("light")
} else{
    setTheme(userTheme)
}