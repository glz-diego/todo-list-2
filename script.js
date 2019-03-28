let searchTerms = [];

		function doSearch() {
			//clears all output in the console
			console.clear();

			//start timer
			console.time("doSearch");

			//get a reference to the text box
			let txtSearch = document.querySelector("#txtSearch");

			//get a reference to the checkbox
			let chkAlert = document.querySelector("#chkAlert");

			// add this new search term to the array
			searchTerms.push({"searchTerm" : txtSearch.value});

			//if the checkbox is checked then show an alert
			if(chkAlert.checked) {
				//pop up the value of txtSearch
				alert(`You added the task of ${txtSearch.value}`); 
			}

			//keeps track of the calls to txtSearch
			console.count("txtSearch count", txtSearch);
			
			//starts a collapsed group of log entries
			console.groupCollapsed("log examples");
				
				//outputs the value in the textbox
				console.log(txtSearch.value);

				//outputs the object that txtSearch references
				console.dir(txtSearch);

				//outputs the value as an error
				console.error(txtSearch.value);

				//outputs the value as a warning
				console.warn(txtSearch.value);

				//outputs the value as info
				console.info(txtSearch.value);

				//outputs the value as debug info
				console.debug(txtSearch.value);

				//checks that the value is "frogs", otherwise prints error
				console.assert(txtSearch.value == "frogs", "Search value should be frogs");

			//ends the group, all consoles after this are outside the group
			console.groupEnd();

			//keeps track of the calls to txtSearch
			console.count("txtSearch count", txtSearch);

			//get a reference to the output div and history
			let searchOutput = document.querySelector("#searchOutput");
			let searchHistory = document.querySelector("#searchHistory");
			
			//write the search term to the output div
			searchOutput.innerHTML = `You added the task of ${txtSearch.value}`;
			searchHistory.innerHTML = '';

			for(var i = 0; i < searchTerms.length; i++) {
				searchHistory.innerHTML = searchHistory.innerHTML + "<BR>" + searchTerms[i].searchTerm;
			}

			//print the search terms used so far
			console.table(searchTerms);

			//end the timer
			console.timeEnd("doSearch");

			//stops the form from submitting!!
			return false;
		}