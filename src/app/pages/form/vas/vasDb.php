<?php

$row = $_POST;
echo '<script> console.log("'.$row.'")</script>';
$con = mysqli_connect('localhost', 'root','','vas');
$result = "INSERT into vas_form(title,model_name,model_num,tester, ODM,odm_email,odm_qq,software) VALUES('".$row['modelName']."','".$row['modelName']."','".$row['modelNumber']."','".$row['tester']."','".$row['odm']."','".$row['email']."','".$row['qqAccount']."','".$row['software']."')";


mysqli_query($con, $result);


?>