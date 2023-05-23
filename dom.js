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
}

