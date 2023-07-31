let body = document.querySelector("body");
body.style["background-color"] = "DarkBlue";

let heading1 = document.querySelector("h1");
heading1.style["textDecoration"] = "underline";

let heading2 = document.querySelector("h2");
heading2.style["textAlign"] = "center";
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

let images = document.getElementsByClassName("pokemon_images");
for (let i = 0; i < images.length; i++)
{
    images[i].style["border"] = "3px dotted orange";
}

let names = document.getElementsByClassName("pokemon_names");

for (let i = 0; i < names.length; i++)
{
    names[i].innerHTML = names[i].innerHTML + "!";
    names[i].style["color"] = "gold";
}

let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project";
footer.style.textDecoration = "overline underline";
footer.style.fontStyle = "italic";
footer.style.fontSize = "24px";