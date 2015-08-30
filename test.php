<?php
$link=mysql_connect('localhost','root','1');
   
//jika koneksi gagal, langsung keluar dari PHP
if (!$link)
{
   die("Koneksi dengan MySQL gagal");
}
   
//gunakan database universitas
$result=mysql_query('USE sigita');
if (!$result)
{
   die("Database mahasiswa gagal digunakan");
}
 
$result=mysql_query('SELECT * FROM komentar');

?>
<!DOCTYPE html>
<head>
   <meta charset="UTF-8">
   <title>Belajar PHP MySQL</title>
   <style>
   h3{
      text-align:center; }
   table { 
      border-collapse:collapse;
      border-spacing:0;     
      font-family:Arial, sans-serif;
      font-size:16px;
      padding-left:300px;
      margin:auto; }
   table th {
      font-weight:bold;
      padding:10px;
      color:#fff;
      background-color:#2A72BA;
      border-top:1px black solid;
      border-bottom:1px black solid;}
   table td {
      padding:10px;
      border-top:1px black solid;
      border-bottom:1px black solid;
      text-align:center; }         
   tr:nth-child(even) {
     background-color: #DFEBF8; }
   </style>
</head>
<body>
   <h3>Penyajian Data MySQL dalam bentuk tabel HTML dengan CSS</h3>
<table>
<tr>
   <th>No</th>
   <th>Nama</th>
   <th>Email</th>
   <th>Pesan</th>
</tr>
<?php
while ($row=mysql_fetch_array($result))
{
   echo "<tr>";
   echo "<td>".$row['No']."</td>";
   echo "<td>".$row['nama']."</td>";
   echo "<td>".$row['email']."</td>";
   echo "<td>".$row['pesan']."</td>"; 
   echo "</tr>";
}
?>
</table> 
</body>
