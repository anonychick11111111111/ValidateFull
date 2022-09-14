$(function() {
  $.validator.addMethod("regex", function(value, element, regexpr) {          
      return regexpr.test(value);
  }, " Phone number must start with 0."); 

  $("#commentForm").validate({
    rules: {
      name:  {
        required: true,
        rangelength: [2, 100]
      },
      email:  {
        required: true,
        rangelength: [5, 100],
        email: true
      },
      password: {
        required: true,
        minlength: 8
      },
      re_password: {
        equalTo: "#password"
      },
      birthday: {
        required: true,
        date: true
      },
      phoneNumber: {
        required: true,
        digits: true,
        maxlength: 10,
        minlength: 10,
        number: true,
        regex: /0\d{3}(\.?\d{3}){2}/  
      },
      topic: {
        required: true,
        minlength: 2
        },
      topic1: {
        required: true,
        minlength: 1
        },
      comment: {
        required: false
      }
    },

    messages: {
        name: {
        required:"You are not enter a login name",
        rangelength: "Name must be between 2 and 100 characters"
      },
      email:  {
        required: "You not type an email yet !",
        rangelength: "Email must be between 2 and 100 characters",
        email: "Email incorrect format"
      },
      password: {
        required: "You must type Password !",
        minlength: "Must type at least 8 character",
      },
      re_password: {
        equalTo: "Re-entered password does not match"
      },
      birthday: {
        required: "You must type a date",
        date: "Date invalid !"
      },
      phoneNumber: {
        required: "You must enter phone number",
        digits: "Phone number must be an integer",
      },
      topic: {
        required: "You must choose two of them",
        minlength: "Please select 2 options"
      },
      topic1: {
        required: "You must choose one of them",
        minlength: 1
      }
    },
    submitHandler: function(form) { 
      $(form).submit();
    },
  });  
});
