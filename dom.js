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

