<?php

if ($_SERVER["REQUEST_METHOD"] == 
"POST") {
  $name = $_POST['name'];
  $number = $_POST['number'];
  $email = $_POST['email'];
  
  $to = "jeyaraj3146@gmail.com";
  $subject = "Net-Origin - New form submission";
  $body = "Name: $name\nNumber: $number\nEmail: $email";

  if (mail($to, $subject, $body)){
    echo "Email sent successfully!";
  } else {
    echo "Error sending email."
  }
}
?>