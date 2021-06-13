//password matching alert

var passwordMatch = function() {
    if (document.getElementById('psw').value ==
      document.getElementById('pswRepeat').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords do not match';
    }
  }