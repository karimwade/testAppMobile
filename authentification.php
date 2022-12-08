<?php
require_once "dbcon.php";
$json = file_get_contents('php://input');
$obj =json_decode($json, true);
$username = $obj['username'];
$password = $obj['passwrd'];

$query = "select * from user where username='{$username}' and password='{$password}'";
$query_output = mysqli_query($conn, $query);
$count = mysqli_num_rows($query_output);

if($count==1){
    $arr = array("result"=>"Connexion effectuée avec succés");
    echo json_encode($arr);
}
else{
    $arr = array("result"=>'Echec connexion');
    echo json_encode($arr);
}
?>