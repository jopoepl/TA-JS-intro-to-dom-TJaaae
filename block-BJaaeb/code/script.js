/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

//
function createInputElm (labelMessage, type = "text") {
   let label = document.createElement(`label`);
   let input = document.createElement(`input`);
   label.innerText = labelMessage;
   input.type = type;
   label.append(input);

   return label;


}

let body = document.querySelector(`body`)



// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// // 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function createInputElm (labelMessage, type = "text") {
  let label = document.createElement(`label`);
  let input = document.createElement(`input`);
  label.innerHTML = labelMessage;
  input.type = type;
  label.append(input);
  return label;
}



// // TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

body.append(createInputElm('<h1>Your age</h1>', 'number'))


// // 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// // the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// // Your code goes here

function createList (array) {
  let ul = document.createElement(`ul`);
  array.map(element => {
    let li = document.createElement(`li`);
     ul.append(li);
     li.innerText = element
  })

  return ul 


}

// // TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/



//


function createTodoList (array) {
  let ul = document.createElement(`ul`);
  array.map(todo => {
    let li = document.createElement(`li`);
    let p = document.createElement(`p`);
    p.innerText = todo.name;
    let input = document.createElement(`input`);
    input.type = "checkbox";
    input.checked = todo.isDone; 
    input.name = "";
    input.id="";
    let span = document.createElement(`span`);
    if (todo.isDone === true) {
      span.innerText = `✅`;
    } else {
      span.innerText = `❌`;
    }
    ul.append(li);
    li.append(p, input, span)

  })
  return ul

}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
// createTodoList([
//   { name: 'Learn DOM', isDone: false },
//   { name: 'Learn React', isDone: true },
//   { name: 'Learn JS', isDone: true },
// ]);
