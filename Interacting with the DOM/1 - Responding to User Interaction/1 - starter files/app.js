const btnCreate = document.getElementById("btn-main");
const btnToggle = document.querySelector(".btn-toggle");
const btnRemove = document.querySelector(".btn-remove");
const taskList = document.querySelector(".list-container ul");
const listItems = taskList.children; 
console.log(listItems)

//add fxn that accepts list item and attaches button to new items

function attachRemoveButton(li){
	let remove = document.createElement('button')
	//add appropiate class
	remove.className = 'remove';
	//set text context to remove
	remove.textContent = 'Remove';
	//append item to list
	li.appendChild(remove)
}
//loop through list items to call attach remove function on each item
for (let i=0; i<listItems.length; i++){
	attachRemoveButton(listItems[i])

}

//const listItems = document.getElementsByTagName("li");
taskList.addEventListener('click', (event) => {
	if(event.target.tagName === 'BUTTON'){
		const button = event.target;
		//buttons parent is li, so that is where you'll store button
		const li = button.parentNode;
		li.remove()

		// event.target.textContent = 
		// event.target.textContent.toUpperCase();
		}

})
	//for any item to be capitalized when mouse hovers, we will use a for loop

// for (let i = 0; i < listItems.length; i += 1) {
// 	listItems[i].addEventListener("mouseover", () => {
// 		//want the letters to be capitalized when mouse hovers
// 		listItems[i].textContent = listItems[i].textContent.toUpperCase();
// 	});
// }
//Add event handler, and inside, log out the event object
// document.addEventListener('click', (event) =>{
// 	console.log(event.target)
// })

// document.addEventListener("click", (event) => {
// 	console.log(event);
// });
// >>
btnCreate.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	const input = document.querySelector('.input-main');
	let li = document.createElement('li');
	li.textContent = input.value;
	attachRemoveButton(li);
	ul.appendChild(li);
	input.value = '';
  });

btnCreate.addEventListener("click", () => {
	const input = document.querySelector(".input-main");
	const list = document.querySelector("ul");
	list.insertAdjacentHTML("afterbegin", `<li>${input.value}</i>`);
	input.value = "";
});
//event listener for button that was removed
// btnRemove.addEventListener("click", () => {
// 	const li = document.querySelector("li:last-child");
// 	li.remove();
// });
