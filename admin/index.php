<?php 
session_start();
if(isset($_SESSION['user']))
?>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0;url=pages/home.php">
<title>SIGITA</title>
<script language="javascript">
    window.location.href = "pages/home.php"
</script>
</head>
<body>
Go to <a href="pages/home.php">/pages/index.html</a>
</body>
</html>
