document.addEventListener('DOMContentLoaded', () =>{

const form = document.getElementById('registrar');
const input = form.querySelector('input');
//to insert, you'll have to insert before- sits under the dom and below form and above ul
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hi those who have't responded";
filterCheckbox.type = 'checkbox'
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);
filterCheckbox.addEventListener('change', (e) => {
    //store value in isChecked
    const isChecked = e.target.checked;
    //looping through them... use children property (reference in all ul element's children)
    const lis = ul.children;
    if (isChecked){
        for (let i=0; i<lis.length; i++){
            let li = lis[i]
            if (li.className === 'responded'){
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        }
    } else {
        for (let i=0; i<lis.length; i++){
            let li = lis[i]
            li.style.display = '';
        }
    }
});

function createLI(text) {
    function createElement(elementName, property, value){
        const element = document.createElement('elementName');
        element[property] = value;
        return element;
    }

    function appendToLI(elementName, property, value){
        const element = createElement(elementName, property, value);
        li.appendChild(element);
        return element;
    } 
    const li = document.createElement('li');
    appendToLI ('span', 'textContent', text);
    appendToLI('label', 'textContent', 'Confirmed')
        .appendChild(createElement('input', 'type', 'checkbox' ));
    appendToLI('button', 'textContent', 'edit');
    appendToLI('button', 'textContent', 'remove');
    return li; 
}

    // //how you add text in html, not just text 
    //    li.appendChild(element);
    //how you add text in html, not just text 
    //create a text box for confirmed box 
    
    //same as above: const label = createElement('label', 'textContent', 'confirmed');
    // const checkbox = createElement('input', 'type', 'checkbox' );

    //instea of making 2 consts, just use it like below :const label = appendToLi('label', 'textContent', 'confirmed');

    // li.appendChild(label);
    //remove invitee names to the list 
//1.add remove button as a child 
    // li.appendChild(editButton);
//creating an edit button
    // li.appendChild(removeButton);
    

form.addEventListener('submit', (e) => {
    //cancel the browsers default behavior
    e.preventDefault();
    //store input value in text 
    const text = input.value;
    // this is to clear out the inputs 
    input.value = '';
    const li = createLI(text);
        ul.appendChild(li);

});
//add a handler to handbox for responded (you can click on box )
ul.addEventListener('change', (e) => {
    // check in console: console.log(e.target.checked);
    const checkbox = event.target; 
    const checked = checkbox.checked;
    //parent node 1 to traverse the label element, and again for the list item
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
        //class name property of list items to set class accordingly
        listItem.className = 'responded';
    }else {
        listItem.className = '';

    }
});

ul.addEventListener('click', (e) =>{
    //filter out elements that are not buttons
    if (e.target.tagName === 'BUTTON'){
        const button = e.target
        const li = button.parentNode;
        const action = button.textContent;
        const ul = li.parentNode;
        const nameActions = {
            remove: () => {
                ul.removeChild(li);
            },
            edit:     ()=> {
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                //input element to text context of span
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                //set button to save
                button.textContent = 'save';
             },
             save: () =>{
                const input = li.firstElementChild;
                const span = document.createElement('span');
                //no need to include span type: input.type = 'text';
                //input element to text context of span
                //set span type to input value because... these represents the edits the user has made to name
                span.textContent = input.value
               //append span element
                li.insertBefore(span, input);
                li.removeChild(input);
                //set button to save
                button.textContent = 'edit';
            }
        };
        //select and run action in button's name 
        nameActions[action]();
      
      }
    });
});
