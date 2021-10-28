<?php

if(isset($_POST["submit"])) {
    if($_POST["message"]) {

        mail($_POST["email"], $_POST["subject"],


        $_POST["message"]. "From: an@email.address");
    }
}


?>