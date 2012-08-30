//Form validation functions

	$.validator.setDefaults({
		submitHandler: function() { 
			alert("submitted successfully");
		}
	});	
	
	$().ready(function() {
		$("#frm1").validate( {
			rules: {
				username: {
					required: true,
					minlength: 5,
					maxlength: 8
				},
				password: {
					required: true,
					minlength: 2,
					maxlength: 8
				},
				alphabet1: {
					required: true,
					minlength: 2,
					maxlength: 6
				},
				alphabet2: {
					required: true,
					minlength: 2,
					maxlength: 15
				},
				fileUpload: {
					required: true,
					accept: "png|jpe?g|gif"
				},
				day: {
					required:true,
					number: true,
					minlength: 1
				},
				month: "required",
				year: {
					required: true,
					number: true,
					minlength: 4
				},
				checkBoxes: {
					required: true,
					minlength: 2
				},
				multipleSelect: "required",
				phone: "required"
			},
			messages:{
				username: {
					required: "username required",
					minlength: "enter valid name",
					maxlength: "enter valid name"
				},
				password: {
					required: "password required",
					minlength: "enter valid name",
					maxlength: "enter valid name"
				},
				alphabet1: {
					equalto: "/^[a-zA-Z]+$/",
					required: "required",
					minlength: "enter min of 2 char's",
					maxlength: "enter max of 8 char's"
				},
				alphabet2: {
					required: "required",
					minlength: "enter min of 2 char's",
					maxlength: "enter max of 15 char's"
				},
				
				fileUpload: {
					required: "required",
					accept: "invalid format"
				},
				day: {
					required: "required",
					number: "enter no's only",
					minlength: "Invalid date"
				},
				month: "required",
				year: {
					required: "required",
					number: "enter no's only",
					minlength: "Invalid date"
				},
				checkBoxes: {
					required: "required",
					minlength: "select atleast two hobbies"
				},
				multipleSelect: "required",
				phone: "required"
			}
		});
		
		 $("#phone").mask("+91 (999)-999-9999",{placeholder:" "});

	});		
	
