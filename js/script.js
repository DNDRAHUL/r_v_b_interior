var navlist = document.getElementById('navitems');
function openmenu() {
    navlist.style.left = '0';
}
function closemenu() {
    navlist.style.left = '-200px';
}
document.querySelector("#menuopen").addEventListener("click", openmenu);

/* ----- keeps the links active ------*/

document.addEventListener('DOMContentLoaded', function () {
    
    var currentUrl = window.location.href.split('#')[0];
    var navLinks = document.querySelectorAll('.nav-links');

    navLinks.forEach(function (link) {

        var linkUrl = link.href.split('#')[0];

        if (linkUrl === currentUrl) {
            link.classList.add('active');
        }
    });
});

/* -------- move to top or bottom accordingly -------- */

document.addEventListener('DOMContentLoaded', function () {
    
    var backToTopLink = document.getElementById('backtotop');

    window.addEventListener('scroll', function () {
        if (this.oldScroll > this.scrollY) {
            backToTopLink.href = '#top'; 
            backToTopLink.querySelector('i').className = 'fa fa-arrow-up';
        } else {
            backToTopLink.href = '#bottom'; 
            backToTopLink.querySelector('i').className = 'fa fa-arrow-down';    
        }

        this.oldScroll = this.scrollY;
    });
});

/* ------ contact from --------- */

function validateForm() {
    var name = document.getElementById('username');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');

    if (name.value.trim() === '' || phone.value.trim() === '' || message.value.trim() === '') {
        showError('All fields are required.');
        return false;
    }

    var phoneNoPattern = /^\d{10}$/;
    if (!phoneNoPattern.test(phone.value)) {
        showError('Please enter a valid phone number');
        return false;
    }

    return true;
}


function showError(message) {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}

function success() {
    var errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
}

function validate() { 
    let name = 
        document.getElementById("name").value; 
    let subject = 
        document.getElementById("subject").value; 
    let phone = 
        document.getElementById("phone").value; 
    let email = 
        document.getElementById("email").value; 
    let message = 
        document.getElementById("message").value; 
    let error_message = 
        document.getElementById("error_message"); 
  
    error_message.style.padding = "10px"; 
  
    let errors = []; 
  
    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push( 
            "Please Enter a valid Email");} 
    if (message.length <= 40) { 
        errors.push( 
            "Please Enter More Than 40 Characters");} 
  
    if (errors.length > 0) { 
        error_message.innerHTML = 
            errors.join("<br>"); 
        return false;} 
    else {  console.log('Hello Rahul');

    const data = {
        client_message: message,
        client_type: client,
        contact_number: contact,
        email_id: email,
        name: name
      };

    Email.send({
        SecureToken : "106bd400-3074-4cad-93e1-1cd5873dcb52 ",
        To : 'interionoreplay@gmail.com',
        From : "interionoreplay@gmail.com",
        Subject: `Enquiry From ${data.name}`,
            Body: `Hi Viren,<br>Please find the new customer details as follows:<br>
                   Name: ${data.name}<br>
                   Contact Number: ${data.contact_number}<br>
                   Email: ${data.email}<br>
                   Message: ${data.message}<br>`
    });

        alert( 
            "Form Submitted Successfully!"); 
        return true;}}
