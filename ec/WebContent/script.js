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
			$("#fn").append('<p class="errorwarnning">First name should not be empty.</p>');
		}
		if (LastName.length == 0) {
			$("#ln").append('<p class="errorwarnning">Last name should not be empty.</p>');
		}
		if (FamilyID.length == 0) {
			$("#fi").append('<p class="errorwarnning">Family ID should not be empty.</p>');
		} else if (FamilyID.match(/^d+$/)) {
			$("#fi").append('<p class="errorwarnning">Family ID should be an integer.</p>');		
		}			
		console.log(FirstName);
		console.log(LastName);
		console.log(FamilyID);				
		console.log(SelectedClass);
	});	
	$("#button2" ).click(function() {	
		$(".errorwarnning").remove();			
	});
})