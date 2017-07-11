var ul = document.getElementById('list'),
	create=document.getElementById('create')

create.onClick = function()
{
	addList(ul);
}

function addList(targetUi)
{
var inputText = document.getElementById('text').value,
	li = document.createElement('li'),
	textNode = document.createTestNode(inputText + ' '),
	DeleteButton = document.createElement('button');
  ViewButton = document.createElement('viewbutton');

document.getElementById('text').value = " ";

if (inputText.length === 0)
{
	alert('No Input Filled In');
	return false;
}

ViewButton.innerHTML = "View";
DeleteButton.innerHTML = "Delete";
DeleteButton.setAttribute("onClick", "Delete(this);");

li.appendChild(textNode);
li.appendChild(ViewButton);
li.appendChild(DeleteButton);

tergetUi.appendChild(li);
}

function Delete(item)
{
	var parent = item.parentElement;
	parent.parentElement.removeChild(parent)
}
 

