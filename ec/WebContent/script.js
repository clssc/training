/**
 * 
 */
$(document).ready(function() {
	//console.clear();
	$("#button1" ).click(function() {
		var FirstName = $("#first_name").val();
		var LastName = $("#last_name").val();
		var ChineseSchoolID = $("#chinese_school_ID").val();	
		var SelectedClass = $("#drop_down_list").val();
		
		
		//console.log(FirstName);
		//console.log(LastName);
		//console.log(ChineseSchoolID);				
		//console.log(SelectedClass);
		var data = {
    'FirstName': FirstName,
    'LastName': LastName,
	'ChineseSchoolID': ChineseSchoolID,
	'SelectedClass':SelectedClass
  };

  var messageBody = JSON.stringify(data);
  console.log('sending', messageBody);
  $.ajax({
    type: 'POST',
    url: 'https://script.google.com/macros/s/AKfycbwWdG4Ob9Df_S0TKPaMdCVr78QIs_SkDxUwkJK4zGuKKImknC8/exec',
    data: messageBody,
    dataType: 'text'
  }).done(function(ok) {
    alert('server said ' + ok);
  }).fail(function(err) {
    alert('server rejected ' + err);
  });

		
		//$("p").append("<p>" + FirstName + "</p>")
	});	

	
	
})