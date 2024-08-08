// form one 
document.getElementById("yourFormtwo").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const lname = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const mymessage = document.getElementById('message').value;
    const myCity = document.getElementById('city').value;
    const myCourse = document.getElementById('course').value;


    Email.send({
        Host: "smtp.elasticemail.com", // Replace with your SMTP server host
        Username: "ahtesham.ahmed3535q@gmail.com", // Replace with your SMTP username
        Password: "57D359558C3BD77F5C7CF0C3748A5314D1E8", // Replace with your SMTP password
        To: 'ahtesham.ahmed3535q@gmail.com',
        From: "ahtesham.ahmed3535q@gmail.com",
        Subject: "Contact Form Submission",
        Body: {
            html: `Name: ${name}<br>Last Name: ${lname}<br>Email: ${email}<br>Number: ${number}<br>Message: ${mymessage} <br>City: ${myCity}<br>Course: ${myCourse} `
        }
    }).then(
        function (message) {
            var myModal = new bootstrap.Modal(document.getElementById('messageModal'));
            myModal.show();
            document.getElementById("yourFormtwo").reset(); // Reset the form
        }
    );
});