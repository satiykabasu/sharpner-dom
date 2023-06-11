//TRAVERSING NODE



//PARENT NODE
let value1= document.querySelector('#items');
console.log(value1.parentNode);

//parentNode and parentElement both are same

console.log(value1.parentElement.parentElement);






//CHILD NODE
console.log(value1.childNodes);//not preferable as it gives element and also whitespace or linebrake which is not preferable
console.log(value1.children);//only gives element so preferable
//childNode is nodelist type and childern is html collection 

console.log(value1.firstChild);//also gives whitespace as firstChild so not preferable
console.log(value1.firstElementChild);//actual gives first element child so preferable

console.log(value1.lastChild);//not preferable
console.log(value1.lastElementChild);//preferable




//SIBLING NODE

console.log(value1.nextSibling);//gives white space,not preferable
console.log(value1.nextElementSibling);//actual gives element so preferable


console.log(value1.previousSibling);//not preferable
console.log(value1.previousElementSibling);//preferable





//CREATING NODE AND APPEND CHILD

let newDiv=document.createElement('div');
//set className
newDiv.className="hello";
//set id name
newDiv.id="hello1";
//set other attribute
newDiv.setAttribute('title','hello world');//it takes name and value as argument;

//create textnode
let textElement=document.createTextNode('Hello word');

//add textElement into div

newDiv.appendChild(textElement);

console.log(newDiv);




//NOW, CREATING NODE IS PART OF JS BUT NOT OF DOM SO WE HAVE TO INSERT IT
//we want to insert that after line no 12 so

let container=document.querySelector('header .container');//takes two argument , one parentNode and another one childNode
let header=document.querySelector('header h1');
//as we want to add new div between container and h1 so we have to select both
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,header);

let para=document.createElement("p");
let text=document.createTextNode("Hello World");
para.appendChild(text);

let first=document.getElementById('items');
let second=document.getElementById('hi');
first.insertBefore(para,second);







