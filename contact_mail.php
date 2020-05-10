<?php
$toEmail = "hello@danielsabol.com";
$mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
if(mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)) {
print "<p class='success'>Ďakujeme za Vašu správu</p>";
} else {
print "<p class='Error'>Problém s odoslaním, skúste prosím neskôr.</p>";
}
?>
