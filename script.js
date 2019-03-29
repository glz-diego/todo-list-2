const todos = [];
var iDiv;
function add(){
	let task = document.querySelector("#newTask").value;
	if (task != "") {
		document.querySelector("#newTask").value = "";
	}
	iDiv = document.createElement('div');
	iDiv.innerHTML = "<input id='todo${item.itemid}' type='checkbox'/>&nbsp;" + task;
	document.querySelector('#entries').appendChild(iDiv);

	let inputData = document.getElementById("newTask");

	todos.push(inputData.value);

	console.log(todos);		
}
function clearAll() {
  var checkBox = document.getElementById("todo${item.itemid}");
  let inputData = document.getElementById("newTask");
  if (checkBox.checked == true){
		iDiv.innerHTML = "";
  }
}