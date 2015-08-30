<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SIGITA - Sistem Informasi Geografis Titik Api Propinsi Riau</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="../dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">SIGITA</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li class="divider"></li>
                        <li><a href="/sigita/"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search...">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="home.php"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="berita.php"><i class="fa fa-newspaper-o fa-fw"></i> Berita</a>
                        </li>
                        <li>
                            <a href="komentar.php"><i class="fa fa-comments fa-fw"></i> Komentar</a>
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
          
       <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Berita</h1>
                    </div>
                    <?php
					include "./admin/koneksi.php";
					//proses input berita
					if (isset($_POST['Input'])) {
					$judul = addslashes (strip_tags ($_POST['judul']));
					$kategori = $_POST['kategori'];
					$headline = addslashes (strip_tags ($_POST['headline']));
					$isi_berita = addslashes (strip_tags ($_POST['isi']));
					$pengirim = addslashes (strip_tags ($_POST['pengirim']));
					//insert ke tabel
					$query = "INSERT INTO berita VALUES('','$kategori','$judul','$headline','$isi_berita','$pengirim', now())";
					$sql = mysql_query ($query);
					if ($sql) {
					echo "<h2><font color=blue>Berita telah berhasil ditambahkan</font></h2>";
					} else {
					echo "<h2><font color=red>Berita gagal ditambahkan</font></h2>";
					}
					}
					?>
					<a href="arsip_berita.php">Arsip Berita</a> |
					<a href="berita.php">Input Berita</a>
					<br><br>
					<FORM ACTION="" METHOD="POST" NAME="input">
						<table cellpadding="0" cellspacing="0" border="0" width="700">
							<tr>
								<td colspan="2"><h2>Input Berita</h2></td>
							</tr>
							<tr>
								<td width="200">Judul Berita</td>
								<td>: <input type="text" name="judul" size="30"></td>
							</tr>
							<tr>
								<td>Kategori</td>
								<td>:
								<select name="kategori">
								<?
								$query = "SELECT id_kategori, nm_kategori FROM kategori ORDER BY nm_kategori";
								$sql = mysql_query ($query);
								while ($hasil = mysql_fetch_array ($sql)) {
								echo "<option value='$hasil[id_kategori]'>$hasil[nm_kategori]</option>";
								}
								?>
							</select></td>
							</tr>
							<tr>
								<td>Headline Berita</td>
								<td>: <textarea name="headline" cols="50" rows="4"></textarea></td>
							</tr>
							<tr>
								<td>Isi Berita</td>
								<td>: <textarea name="isi" cols="50" rows="10">
								</textarea></td>
							</tr>
							<tr>
								<td>Pengirim</td>
								<td>: <input type="text" name="pengirim" size="20"></td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;&nbsp;<input type="submit" name="Input" value="Input Berita">&nbsp;
							<input type="reset" name="reset" value="Cancel">
							</td>
							</tr>
						</table>
					</FORM>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->
		
</body>  
</html>  
