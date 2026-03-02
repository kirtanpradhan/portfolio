//examine the document object
// document.title = 'lol';
// console.log(document);

// get element by id

// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'hello'; //ignores the styling
// headerTitle.innerText = 'goodbye'; // takes styling into account if the HTML has any
// headerTitle.innerHTML = '<h3>lol</h3>';//adds h3 tag with the content inside the already existing HTML i.e. h1 in this case

// let header = document.getElementById('main-header');
// header.style.borderBottom = '3px solid #000';

// GET ELEMENTS BY CLASS NAME

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hi';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// for(let i = 0; i < items.length; i++)
// {
//     items[i].style.backgroundColor = '#ccc';
// }

//GET ELEMENTS BY TAG NAME

// let li = document.getElementsByTagName('li'); //grabs all li tags in the page
// console.log(li);
// li[0].innerText = 'hi';
// for(let i = 0; i < li.length; i++)
// {
//     li[i].innerText = 'yo';
//     li[i].style.backgroundColor = '#20f';
// }

// QUERRY SELECTOR

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px #000';
// let input = document.querySelector('input');
// input.value = 'hello world';
// let submit = document.querySelector('input[type = "submit"]');
// console.log(submit.value);
// submit.value = 'send';
// console.log(submit.value);

// QUERY SELECTOR ALL

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';
// let odd = document.querySelectorAll('li:nth-child(odd)');
// console.log(odd);
// for(let i = 0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor='#ccc';
// }

// TRAVERSING THE DOM
// 1. parent node
// 2. child node
// 3. sibling node

// let itemList = document.querySelector("#items");
// console.log(itemList);

//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parent element
// console.log(itemList.parentElement);

//child node
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[2].style.backgroundColor = 'red';

//first child
// itemList.firstChild.style.backgroundColor='red'; //first child is a line break so it returns a text node
// itemList.firstElementChild.style.backgroundColor='red';

//last child
// lastChild gives text node because of the line break
// itemList.lastElementChild.style.backgroundColor='red';

//next sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// create element

//create a div
// let newDiv = document.createElement('div');
//add class
// newDiv.className = 'hello';
//add id
// newDiv.id = 'hello1';
//add attribute
// newDiv.setAttribute('title', 'hello div');

//create text node
// let newDivText = document.createTextNode('hello world');
//add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(container);

// console.log(h1);

//          .insertBefore(what you  are inserting, what you are inserting before)
// container.insertBefore(newDiv, h1);

// Event listener

//button click event
// let button = document.querySelector('#button').addEventListener('click', buttonClick);

// function buttonClick(event){
//   document.getElementById('header-title').textContent = 'changed';
//   document.querySelector('#main').style.backgroundColor = '#ccc';
// console.log(event);
// console.log(event.target);
// console.log(event.target.id);
// console.log(event.target.className);
// console.log(event.target.classList);

// let output = document.getElementById('output');
// console.log(output);
// output.innerHTML = '<h3>'+event.target.className+'</h3>';

// console.log(event.type);//what type of event it was
// console.log(event.clientX);//mouse position relative to the entire window
// console.log(event.clientY);//same as above
// console.log(event.offsetX);//position relative to the element itself
// console.log(event.offsetY);//same as above
// console.log(event.altKey);//gives true or false depending on if the alt key was pressed while the button was being clicked
// console.log(event.shiftKey);
// console.log(event.ctrllKey);
// }

// let button = document.getElementById("button");
// let box = document.getElementById("box");
// let output = document.getElementById('output');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.innerHTML='<h1>hello</h1>';

// box.addEventListener("mouseenter", runEvent); //just the parent element
// // box.addEventListener("mouseover", runEvent); //for any inner elements as well
// box.addEventListener("mouseleave", runEvent); //parent element
// box.addEventListener("mouseout", runEvent);// inner elements as well

// box.addEventListener('mousemove', runEvent);

// function runEvent(event) {
//   console.log("event type: " + event.type);
//   output.innerHTML = '<h3>mouseX: '+event.offsetX+' </h3> <h3>mouseY: '+event.offsetY+'</h3>';
//   document.body.style.backgroundColor='rgb('+event.offsetX+','+event.offsetY+',40)';

// }

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');
// let output = document.querySelector('#output');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);//click on something to focus on it
// itemInput.addEventListener('blur', runEvent);//click out of something
// itemInput.addEventListener('cut', runEvent);//cut something in the element
// itemInput.addEventListener('paste', runEvent);// paste something in the element
// itemInput.addEventListener('input', runEvent);

// itemInput.addEventListener('change', runEvent); //runs if there is a change in the element

// form.addEventListener('submit', runEvent);//run wiht prevent default ot see output in console

// function runEvent(event) {
// event.preventDefault();//submit button by default submits the data and refreshes so it disappears from the console...this prevents it
// console.log("event type: " + event.type);
// console.log(event.target.value);
// output.innerText = event.target.value;
// }
