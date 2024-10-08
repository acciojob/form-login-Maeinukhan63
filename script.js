function getFormvalue(event) {
    // Ensure the event is passed and prevent default form submission
    if (event) {
        event.preventDefault();
    }

    // Get the form element
    const form = document.getElementById('form1');

    // Retrieve the values from the input fields
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();

    // Combine first name and last name
    const fullName = `${firstName} ${lastName}`;

    // Display the result in an alert
    alert(fullName);
}

// Attach the getFormvalue function to the form's submit event
document.getElementById('form1').addEventListener('submit', getFormvalue);
