<?php 
include "./admin/koneksi.php";



		if(empty($_POST['txt_nama']))
		{
		echo"<script>window.alert('Nama minimal 5 digit');window.location=('index.php')</script>";	
		}
		elseif(empty($_POST['txt_email']))
		{
		echo"<script>window.alert('Email Masih Kosong');window.location=('index.php')</script>";	
		}
		elseif(empty($_POST['txt_pesan']))
		{
		echo"<script>window.alert('Pesan Masih Kosong');window.location=('index.php')</script>";	
		}
		
?>


<?php 

$nama = $_POST['txt_nama'];
$email = $_POST['txt_email'];
$pesan = $_POST['txt_pesan'];

$query=mysql_query("insert into komentar values('','$nama','$email','$pesan')") or die (mysql_error());
if ($query)
{
echo"<script>window.alert('Data Telah Terkirim');window.location=('index.php')</script>";
}
?>
