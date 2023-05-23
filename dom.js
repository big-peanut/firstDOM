var headerTitle=document.getElementById("header-title");
headerTitle.style.borderBottom="solid 3px #000";

var addItems=document.getElementsByClassName('title');
addItems[0].style.fontWeight='bold';
addItems[0].style.color='green';

var listItems=document.getElementsByClassName('list-group-item');
console.log(listItems);
listItems[2].style.backgroundColor='green';

for(var i=0;i<listItems.length;i++)
{
    listItems[i].style.fontWeight='bold';
    listItems[i].style.borderBottom="solid 3px #000";
}
var li=document.getElementsByTagName('li')
for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
    li[i].style.borderBottom="solid 3px #000"
}

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = "None";

var list=document.querySelectorAll('li')
list[1].style.backgroundColor="green"

var odditems=document.querySelectorAll('li:nth-child(odd)')

for(var i=0;i<odditems.length;i++)
{
    odditems[i].style.backgroundColor="#f4f4f4"
}

var itemList=document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="black"
console.log(itemList.parentNode.parentNode)

var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

var newDiv=document.createElement('div');
newDiv.className="hello"
newDiv.id="hello1"
newDiv.setAttribute('title','hellotitle')

var textNode=document.createTextNode("Hello World")
newDiv.appendChild(textNode)
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newDiv,h1)
console.log(newDiv);

var newh1=document.createElement('h1')
newh1.className="h1"
newh1.id="1h1"

var node=document.createTextNode("Hello World")
newh1.appendChild(node)
var x=document.querySelector('ul .list-group')
var y=document.querySelector('ul li .list-group-item')
x.insertBefore(node,y)

