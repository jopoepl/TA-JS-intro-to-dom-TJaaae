let heading = document.createElement(`h1`);
console.log(heading)
heading.innerText = "Bookly"
heading.style.color = `#FFFE45`
heading.style.backgroundColor = `#367E80`
heading.style.textAlign = `center`
heading.style.padding = `25px`

let body = document.querySelector(`body`)
body.style.backgroundColor = `#FDF5E7`
console.log(body)



let boxContainer = document.createElement(`div`);

body.prepend(heading);

body.append(boxContainer)




var marginCenter = {
    "margin": "0 auto"
}

var btnStyles = {
    "padding": "4px 20px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "background-color": "#367E80",
    "color": "white",
    "border-radius": "5px",
    "height": "5%",
    // "width": "10%",
    "margin-bottom": "5px",
    "font-size": "10px",
    "text-align": "center",
    "line-height": "1.5",
}

var containerStyle = {
    "display": "flex",
    "flex-direction": "row",
    "justify-content":"flex-start",
    "width": "80%",
    "margin": "0 auto",
    // "flex": "0 1 30%",
    "flex-wrap": "wrap"
}

Object.assign (boxContainer.style, containerStyle)


var boxStyles = {
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "width": "30%",
    "margin": "5px 10px",
    "background": "white"
}



books.map(element => {
    let box = document.createElement(`div`);
    let img = document.createElement(`img`);
    let h2 = document.createElement(`h2`);
    let subtitle = document.createElement(`h6`);
    let btn = document.createElement(`a`);
    btn.innerHTML = "Buy Now";
    btn.href = "#"
    btn.style.textDecoration = "none"
    btn.style.textAlign = "center"
    img.src = element.image;
    img.style.width = "200px"
    img.style.maxHeight = "300px"
    img.style.padding = "5px 20px"
    img.style.marginTop = "15px"
    Object.assign(box.style, boxStyles);
    h2.innerText = element.title;
    h2.style.textAlign = "center"
    subtitle.innerText = `Author: ${element.author}`;
    subtitle.style.fontSize ="10px"
    subtitle.style.color = "grey"
    subtitle.style.marginTop = "2px"
    Object.assign(btn.style, btnStyles);
    boxContainer.append(box)
    box.append(img, h2, subtitle, btn)
})



document.querySelectorAll(`a`).href = "#";







