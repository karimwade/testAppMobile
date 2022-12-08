<?php
	$host="localhost";
	$user="root";
	$password="";
	$base="test";
	$port=3308;
	$conn=mysqli_connect($host,$user,$password,$base,$port);
	 if($conn)
 	    echo"connexion a la base de donnees reussies<br>";
 	else
        echo"impossible de se connecter a la base de donnees <br>";

?>