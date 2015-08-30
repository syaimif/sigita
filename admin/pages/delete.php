<?php 
$conn = mysql_connect("localhost","root","1");
	mysql_select_db("sigita",$conn);
$id=$_GET['id'];

$query="delete from komentar where id=$id";
$hasil=mysql_query($query);
echo "<script>window.alert('Data Telah Dihapus');window.location=('komentar.php')</script>";
?>

