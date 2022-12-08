<?php
require_once "dbcon.php";
$json = file_get_contents('php://input');
$obj =json_decode($json, true);
$username = $obj['username'];
$mail = $obj['email'];
$password = $obj['passwrd'];
$query = "select * from user where email='{$mail}'";
$query_output = mysqli_query($conn, $query);
$count = mysqli_num_rows($query_output);

if($count==1){
    $arr = array("result"=>"email already present");
    echo json_encode($arr);
}
elseif ($count==0){
    $query2= "insert into user(username,email,password) values ('{$username}','{$mail}','{$password}')";
    $query_output2 = mysqli_query($conn,$query2);
    $arr = array("result"=>'OK');
    echo json_encode($arr);
}else{
    $arr = array("result"=>'fail');
    echo json_encode($arr);
}
    echo "Ceci est la page d'authentificaion de notre application";
    
?>