$(document).ready(function() {
	// $("#sign_up_header").append("<p>HELLO</p>");
	// console.log("test");
	console.clear();
	$("#button1" ).click(function() {
		var FirstName = $('input[name=first_name]').val();
		var LastName = $('input[name=last_name]').val();
		var FamilyID = $('input[name=family_id]').val();	
		var SelectedClass = $("#drop_down_list").val();
		if (FirstName.length == 0) {
			alert("First name should not be empty.");
			return;
		} else if (LastName.length == 0) {
			alert("Last name should not be empty.");
			return;
		} else if (FamilyID.length == 0) {
			alert("Family ID should not be empty.");				
			return;
		} else if (null) {
			alert("Family ID should be an integer.");
			return;
		}
		
		//console.log(FirstName);
		//console.log(LastName);
		//console.log(FamilyID);				
		//console.log(SelectedClass);
		
		var data = {
			'firstname': FirstName,
			'lastname': LastName,
			'familyid': FamilyID,
			'selectedclass' : SelectedClass
		};
		
		var messageBody = JSON.stringify(data);
		console.log('sending', messageBody);
		$.ajax({
			type: 'POST',
			url: 'https://script.google.com/macros/s/AKfycbxgluaOdBMUr0gPjKq5pOOnd3BOYDinxyc0DwNTW6yzGTbu4niO/exec',
			data: messageBody,
			dataType: 'text'
		}).done(function(ok) {
			alert('server said ' + ok);
		}).fail(function(err) {
			alert('server rejected ' + err);
		});
				
	});	
})