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

var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter')
//form submit event

form.addEventListener('submit',addItem)
//delete event
itemList.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)
//add item

function addItem(e)
{
    e.preventDefault();
    //get input value
    var newItem=document.getElementById('item').value;

    //create new li elements
    var li=document.createElement('li')
    //add class
    li.className='list-group-item'
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create del button element
    var del=document.createElement('button');
    //add classes to del 
    del.className='btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(del);
    //append li to list
    itemList.appendChild(li)
}

//remove item

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm("are you sure?"))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

//filter items
function filterItems(e)
{
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //get li
    var items=itemList.getElementsByTagName('li')
    //convert html collection to array
    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}

