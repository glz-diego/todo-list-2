const todos = [];
var iLI;
function add(){
	let task = document.querySelector("#newTask").value;
	iLI = document.createElement('LI');
	iLI.innerHTML = task;
	
	document.querySelector('#entries').appendChild(iLI);

	let inputData = document.getElementById("newTask");

	todos.push(inputData.value);

	console.log(todos);		
	if (task != "") {
		document.querySelector("#newTask").value = "";
	}
}
// iDiv.innerHTML = "<input id='todo${item.itemid}' type='checkbox'/>&nbsp;" + 
// function clearAll() {
// 	var checkBox = document.getElementById("todo${item.itemid}");
// 	let inputData = document.getElementById("newTask");
// 	if (checkBox.checked == true){
// 		document.getElementById("todo${item.itemid}").innerHTML = "";
// 	}
// }