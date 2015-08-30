<?php 
include "./admin/koneksi.php";
$id=$_GET['No'];

$query="delete from komentar where Nama='$id'";
$hasil=mysql_query($query);
echo "<script>window.alert('Data Telah Dihapus');window.location=('koemntar.php')</script>";
?>
