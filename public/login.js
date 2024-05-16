// $(document).ready(function() {
    // Login Form Submission
    // $('#loginForm').submit(function(event) {
    //     event.preventDefault();
    //     const email = $('#loginEmail').val();
    //     const password = $('#loginPassword').val();

    //     $.post('/api/login', { email, password }, function(response) {
    //         if (response.success) {
    //             alert(response.message);
    //             // Redirect to the appropriate page after successful login
    //             window.location.assign("profile.html");
    //         } else {
    //             alert(response.message);
    //         }
    //     });
    // });


    


    // Signup Form Submission
//     $('#signupForm').submit(function(event) {
//         event.preventDefault();
//         const name = $('#signupName').val();
//         const email = $('#signupEmail').val();
//         const password = $('#signupPassword').val();

//         $.post('/api/signup', { name, email, password }, function(response) {
//             if (response.success) {
//                 alert(response.message);
//                 // Redirect to the appropriate page after successful signup
//                 window.location.assign("login.html");
//             } else {
//                 alert(response.message);
//             }
//         });
//     });

//     // Logout Button Click
//     $('#logoutBtn').click(function() {
//         // Implement logout logic here (clear session, redirect to login page, etc.)
//         alert('Logout successful');
//         window.location.assign("index.html");
//     });

//     // Additional logic for the createAccount page and profile page can be added here
// });

$(document).ready(function() {
    // Login Form Submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const email = $('#loginEmail').val();
        const password = $('#loginPassword').val();

        $.post('/api/login', { email, password })
            .done(function(response) {
                if (response.success) {
                    alert(response.message);
                    // Redirect to the appropriate page after successful login
                    window.location.assign("index.html");
                } else {
                    alert(response.message);
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                alert('Failed to login. Please try again.');
            });
    });

    // Signup Form Submission
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        const name = $('#signupName').val();
        const email = $('#signupEmail').val();
        const password = $('#signupPassword').val();

        $.post('/api/signup', { name, email, password }, function(response) {
            if (response.success) {
                alert(response.message);
                // Redirect to the appropriate page after successful signup
                window.location.assign("login.html");
            } else {
                alert(response.message);
            }
        });
    });

    // Logout Button Click
    $('#logoutBtn').click(function() {
        // Implement logout logic here (clear session, redirect to login page, etc.)
        alert('Logout successful');
        window.location.assign("index.html");
    });
});
