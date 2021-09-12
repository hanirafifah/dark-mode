const Body = document.querySelector("body");
const buttonDark = document.getElementById("buttonDark");
const buttonLight = document.getElementById("buttonLight");

const button = {
    dark: buttonDark,
    light: buttonLight,
};

Body.className = "light";
education.className = "light";

function DarkMode(){
    Body.className = "dark";
    buttonDark.style.display = "none";
    buttonLight.style.display = "block";
}

function LightMode(){
    Body.className = "light";
    buttonDark.style.display = "block";
    buttonLight.style.display = "none";

}
