$(document).ready(function() {
	
	$("#Swag" )
	.click(function() {
		var FirstName = $("#firstname").val();
		var LastName = $("#lastname").val();
		var ChineseSchoolID = $("#ChineseSchoolID").val();	
		var Classes = $("#fancypantslist").val();
		console.log(FirstName);
		console.log(LastName);
		console.log(ChineseSchoolID);				
		console.log(Classes);
		
	});	

	var messageBody = JSON.stringify(data);
  console.log('sending', messageBody);
  $.ajax({
    type: 'POST',
    url: 'https://script.google.com/macros/d/1yEeKgEeniuOaODEmsMepdVEUgE_nZTC_FIyncQL9HuMUhDeZ3aqYke3t/edit?template=default&folder=0AIpx_eXx1bMcUk9PVA&usp=drive_web',
    data: messageBody,
    dataType: 'text'
  }).done(function(ok) {
    alert('server said ' + ok);
  }).fail(function(err) {
    alert('server rejected ' + err);
  });
}
	
});
