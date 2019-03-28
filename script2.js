function add(){
	let task = document.querySelector("#newTask").value;
	if (task != "") {
		document.querySelector("#newTask").value = "";
	}
	var iDiv = document.createElement('div');
	iDiv.innerHTML = "<input class='chkTodo' disabled id='todo${item.itemid}' type='checkbox'/>&nbsp;" + task;
	document.querySelector('#entries').appendChild(iDiv);
}
function clearAll() {
	document.querySelector("#tasks").value = "";
}
function click_deleteAll() {
	let checked = document.querySelectorAll(".chkTodo");
	for(let i = 0;i<checked.length;i++) {
		if(checked[i].checked == true) {
			if(checked[i].style.display != 'none') {
				let id = checked[i].id.replace('todo', '');
				let pos = arrTodo.map(e=>e.itemid).indexOf(parseInt(id));
				arrTodo.splice(pos, 1);
				document.querySelector(`#div${id}`).style.display = 'none';
				checked[i].style.display = 'none';
			}
		}
	}
}