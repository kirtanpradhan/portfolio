// just some styling
const box1 = document.querySelector(".row");
box1.style.border = "solid black 1px";
box1.style.marginBottom = "10px";
box1.style.padding = "0 10px 10px 10px";

const box2 = document.getElementById("main");
box2.style.border = "solid black 1px";
box2.style.padding = "0 10px 10px 10px";

//js start
const form = document.getElementById("addForm");
const itemList = document.getElementById("items");

// form submit event
form.addEventListener("submit", addItem);

function addItem(event) {
    event.preventDefault(); //preventing the default function of the submit element and getting it to do what we write inside the funciton
    
    //get input value
    const newItem = document.getElementById("item").value;
    // //create new li element
    const li = document.createElement('li');
    // // add class name to the new li
    li.className = 'list-group-item';
    //add text node to the new li with input value
    li.appendChild(document.createTextNode(newItem));
    // create the delete button element
    const deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    
    itemList.appendChild(li);
    //clear the input field
    document.getElementById("item").value = '';
}

//delete event
itemList.addEventListener('click', removeItem);
// itemList.addEventListener('click', removeItem);

function removeItem(event){
    // console.log(event);
    
    if(event.target.classList.contains('delete')){
        const parent = event.target.parentNode;
        itemList.removeChild(parent);
    }
    
    // if (event.target.classList.contains('delete')){
        //     if(confirm('are you sure?')){
            //         const li = event.target.parentElement;
            //         itemList.removeChild(li);
            //     }
            
            // }
            
        }
        
        
        //filter event
        const filter = document.getElementById('filter');
        filter.addEventListener('keyup', filterItems);

        function filterItems(event){
            //convert everything to lower case and store it
            const text = event.target.value.toLowerCase();

            const items = itemList.getElementsByTagName('li');
            //convert to an array
            Array.from(items).forEach(function(i){
                const itemName = i.firstChild.textContent;//iterates through the array and for each array element 'itemName' gets assigned the text content
                if(itemName.toLocaleLowerCase().indexOf(text) != -1){// the 'itemName' array element is checked to see if it matches with 'text' that is entered...-1 is returned if the answer is false i.e. if not -1 then the 'text' is present 
                    i.style.display = 'block';
                }
                else{
                    i.style.display = 'none';
                }
                
            });
        }