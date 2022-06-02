
let header = document.createElement(`header`)

let heading = document.createElement(`h1`)

heading.innerText ="👑 Peoples of GoT"

let body = document.querySelector(`body`);

body.append(header)
header.append(heading)

let container = document.createElement(`div`);

container.classList.add(`box-container`, `flexr`)

body.append(container)
body.classList.add(`body`)



let allPeople = got.houses.reduce((people, house) => {
    house.people.forEach(person => {
        people.push(person)
    })
    return people;
}, [])





allPeople.forEach(person => {

    let box = document.createElement(`div`);
    box.classList.add(`flexc`, `box`)
    let imgCont = document.createElement(`figure`);
    let imgElm = document.createElement(`img`);
    imgElm.classList.add(`img`)
    let name1 = document.createElement(`h3`);
    let para = document.createElement(`p`);
    imgElm.src = person.image;
    name1.innerText = person.name;
    para.innerText = person.description;
    imgCont.append(imgElm, name1)
    imgCont.classList.add(`figure`)
    let btn = document.createElement(`button`);
    btn.innerText = "Learn More!";
    btn.classList.add(`btn`)
    box.append(imgCont, para, btn);
    container.append(box);

})




