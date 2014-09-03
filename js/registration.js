// On page load...
$(function() {
  // Set a listener for the experienced_hacker radio buttons
  $('section#apply input[name=experienced_hacker]').change(function() {
    console.log(this.value);
    if (this.value === "true") {
      $('#noob-form').addClass('hidden');
      $('#experienced-form').removeClass('hidden');
    } else {
      $('#experienced-form').addClass('hidden');
      $('#noob-form').removeClass('hidden');
    }
    viewportUnitsBuggyfill.refresh();
  });

  // should really disable the return key because people keep submitting incomplete apps
  $('form').bind("keyup keypress", function(e) {
    var code = e.keyCode || e.which; 
    if (code  == 13) {               
      e.preventDefault();
      return false;
    }
  });

  // handler for form submission
  $('form').submit(function(event) {
    $('#submit').button('loading');
    var $form = $(this);
    var $target = $($form.attr('data-target'));

    // Log the user out in case they're still logged in
    Parse.User.logOut();
    
    var data = convertFormToJSON($form);
    data.password = Math.random().toString(36).substring(2);
    data.username = data.email;
    console.log(data);
    var user = new Parse.User();
    user.signUp(data, {
      success: function(user) {
        // window.alert("Thanks for your application! Please check your email to confirm your address.");
        window.location = "/success.html"
        $('#submit').button('reset');
      },
      error: function(user, error) {
        window.alert("There was an error with your application: " + error.message);
        $('#submit').button('reset');
      }
    });

    event.preventDefault();
  });
});

function convertFormToJSON(form){
  var array = $(form).serializeArray();
  var json = {};
  
  jQuery.each(array, function() {
      json[this.name] = this.value || '';
  });
  
  return json;
}