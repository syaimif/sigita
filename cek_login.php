<?php
	session_start(); 		
	include './admin/koneksi.php'; 		
	$user=$_POST['txt_user'];
	$pass=$_POST['txt_pass'];
 
	$query=mysql_query("select * from admin where user='$user' and pass='$pass'");	 
	$xxx=mysql_num_rows($query);	 
	if($xxx==TRUE){ 		
		$_SESSION['user']=$user;  
		header("location:admin/index.php");     
	}else{   				
		echo "gagal login";
	}
 
?>
