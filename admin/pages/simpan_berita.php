<?php 
include "koneksi.php";
$id = $_POST['txt_idBerita'];
$jdlBerita = $_POST['txt_judul'];
$tglTebit = $_POST['thn']."-".$_POST['bln']."-".$_POST['tgl'];
$isiBerita=$_POST['txt_isiBerita'];

$query=mysql_query("insert into berita values('$id ','$jdlBerita','$tglTebit','$isiBerita')") or die (mysql_error());
if ($query)
{
echo"<script>window.alert('Data Telah Terkirim');window.location=('index.php')</script>";
}


?>
