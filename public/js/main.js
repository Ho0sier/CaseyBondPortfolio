console.log($);
$('h1').on('mouseover', function(){
  $('h1').addClass('highlighted');
})

$('h1').on('mouseleave', function(){
  $('h1').removeClass('highlighted');
})

$('#yoface').hover(function(){
  $('#Hidden-blurb').slideDown();

})

$('.navlink').on('mouseover', function(){
  $(this).addClass('highlighted')
})
$('.navlink').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})

var contactsArray = [firstName, LastName, phoneNumber, email]

var Phil = {

    firstName: "Phil",
    lastName: "Lesh",
    phoneNumber: "(650) 777-7777",
    email: "phil.lesh@example.com"
};

var Bob = {

    firstName: "Bob"
    lastName: "Weir"
    phoneNumber:"(650) 666-6666"
    email: "bob.weir@example.com"
};

contactsArray[0] = Phil

console.log(contactsArray)

contactsArray[1] = Bob
