<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/fav.ico">

    <title>SIGITA - Sistem Informasi Geografis Pemetaan Titik Api Propinsi Riau</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
	<link rel="stylesheet" type="text/css" href="css/own_style.css">
    <link href="css/grayscale.css" rel="stylesheet">
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet.css" />
	<link rel="stylesheet" href="http://cdnjs.cloudflare.com/leaflet/0.7.2/leaflet.css" /> <!-- we will us e this as the styling script for our webmap-->
	<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet.css" /> 
	<link rel="stylesheet" href="http://k4r573n.github.io/leaflet-control-osm-geocoder/Control.OSMGeocoder.css" /> 
	<link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.8/mapbox.css' rel='stylesheet' />

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    
    <!--Javascript-->
    <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="js/leaflet-hash.js"></script>
	<script src="js/Autolinker.min.js"></script>
	<script src="http://k4r573n.github.io/leaflet-control-osm-geocoder/Control.OSMGeocoder.js"></script>
    
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">
                    <img src="img/logo.png" alt="" height="30px"><span class="light"></span>
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="active"><a class="glyphicon glyphicon-home" href="index.php"></a></li>
                    <li>
                        <a class="page-scroll" href="#propinsi">Peta</a>
                    </li>
                    <li class="dropdown">
					  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Titik Api<span class="caret"></span></a>
					  <ul class="dropdown-menu">
						  <li><a href="#latar">Latar Belakang</a></li>
						  <li><a href="#summary">Summary</a></li>
						  <li><a href="#unduh">Unduh Data</a></li>				  
					  </ul>
					</li>
                    
                    <li class="dropdown">
					  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Tentang<span class="caret"></span></a>
					  <ul class="dropdown-menu">
						  <li><a href="#about">SIGITA</a></li>
						  <li><a href="#about-riau">Propinsi Riau</a></li>
						  <li><a href="#datatitik">Data Titik Api</a>				  
					  </ul>
					</li>
					<li>
                        <a class="page-scroll" href="#contact">Kontak Kami</a>
                    </li>
                    <li class="active"><a class="glyphicon glyphicon-log-in" data-toggle="modal" data-target="#myModal"></a></li>
                    <li class="active"><a class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#info"></a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading"><a class="glyphicon glyphicon-map-marker">SIGITA</a></h1>
                        <p class="intro-text"><a>Sistem Informasi Geografis Pemetaan Titik Api Propinsi Riau</a><br>Lihat Peta Titik Api</p>
                        <a href="#propinsi" class="btn btn-circle page-scroll">
                            <i class="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Peta Section-->
    <section id="propinsi" class="container content-section">
		<h2 align="center">Peta Titik Api</h2>
		<div id="map"></div> 				
		<script src='data/exp_Siak.js' ></script>
		<script src='data/exp_RokanHulu.js' ></script>
		<script src='data/exp_RokanHilir.js' ></script>
		<script src='data/exp_Pelalawan.js' ></script>
		<script src='data/exp_KuantanSinging.js' ></script>
		<script src='data/exp_KotaPekanBaru.js' ></script>
		<script src='data/exp_KotaDumai.js' ></script>	
		<script src='data/exp_Kampar.js' ></script>				
		<script src='data/exp_IndragiriHulu.js' ></script>				
		<script src='data/exp_IndragiriHilir.js' ></script>				
		<script src='data/exp_Bengkalis.js' ></script>				
		<script src='data/exp_Februari2014.js' ></script>				
		<script src='data/exp_Agustus2014.js' ></script>				
		<script src='data/exp_Juli2014.js' ></script>				
		<script src='data/exp_Juni2014.js' ></script>				
		<script src='data/exp_Mei2014.js' ></script>				
		<script src='data/exp_April2014.js' ></script>				
		<script src='data/exp_Maret2014.js' ></script>				
		<script src='data/exp_Januari2014.js' ></script>				
		<script src='data/exp_riau.js' ></script>
			
		<script src="js/propinsi.js"></script> 
    </section>
    
    <!--Latar Belakang-->
    <section id="latar" class="container content-section text-center">
		<div="row">
			<div class="col-lg-8 col-lg-offset-2">
                <h2>Latar Belakang</h2>
                <p>Kebakaran hutan ataupun perubahan suhu yang begitu mencolok antara daerah yang satu dengan daerah sekitarnya disebut dengan titik api (hotspot). Berdasarkan data BNPB ada 286 titik api di daerah Sumatera,  160 diantaranya terdapat di Provinsi Riau. (“Ratusan titik api bermunculan di Riau”, Juli, 2014).  Dalam hal ini jelas Provinsi Riau merupakan daerah yang memiliki titik api yang begitu tinggi sehingga perlu adanya strategi khusus yang bisa menanggulangi titik api tersebut, yaitu salah satunya dengan membuat sistem informasi pemetaan daerah dengan titik api yang tinggi.</p>
            </div>
		</div>
    </section>
    
	<!--Summary-->
	<section id="summary" class="container content-section text-center">
		<div="row">
			<div class="col-lg-8 col-lg-offset-2">
				<h2>Summary</h2>
				<div class="panel panel-default alert alert-info">
					<div class="panel-heading">Ringkasan Data Titik Api</div>
					<div class="panel-body">
						<table class="table">
							<thead>
								<tr>
									<th>No</th>
									<th>Bulan</th>
									<th>Kabupaten</th>
									<th>Jumlah Titik Api</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>1</th>
									<th>Januari</th>
									<th>-</th>
									<th>236</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>2</th>
									<th>Februari</th>
									<th>-</th>
									<th>3715</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>3</th>
									<th>Maret</th>
									<th>-</th>
									<th>4404</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>4</th>
									<th>April</th>
									<th>-</th>
									<th>106</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>5</th>
									<th>Mei</th>
									<th>-</th>
									<th>91</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>6</th>
									<th>Juni</th>
									<th>-</th>
									<th>324</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>7</th>
									<th>Juli</th>
									<th>-</th>
									<th>359</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>8</th>
									<th>Agustus</th>
									<th>-</th>
									<th>132</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>9</th>
									<th>-</th>
									<th>Bengkalis</th>
									<th>3552</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>10</th>
									<th>-</th>
									<th>Siak</th>
									<th>2785</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>11</th>
									<th>-</th>
									<th>Pelalawan</th>
									<th>1480</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>12</th>
									<th>-</th>
									<th>Kota Dumai</th>
									<th>732</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>13</th>
									<th>-</th>
									<th>Indragiri Hilir</th>
									<th>539</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>14</th>
									<th>-</th>
									<th>Indragiri Hulu</th>
									<th>161</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>15</th>
									<th>-</th>
									<th>Kampar</th>
									<th>62</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>16</th>
									<th>-</th>
									<th>Rokan Hulu</th>
									<th>2</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>17</th>
									<th>-</th>
									<th>Rokan Hilir</th>
									<th>12</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>18</th>
									<th>-</th>
									<th>Kuantan Singingi</th>
									<th>2</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>19</th>
									<th>-</th>
									<th>Kota Pekan Baru</th>
									<th>4</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!--Unduh Data-->
	<section id="unduh" class="container content-section text-center">
		<div="row">
			<h2>Unduh Data Titik Api</h2>
			<div class="col-lg-8 col-lg-offset-2">
			<p>Anda dapat mengunduh data titik api tahun 2014 di Propinsi Riau pada tiap-tiap kabupaten dan bulan. Tekan tombol nama Kabupaten dan atau Bulan sesuai dengan data yang diinginkan untuk mengunduh data.</p>
				  <a href="data/bln/Januari2014.csv" class="btn btn-default">Januari</a>
				  <a href="data/bln/Februari2014.csv" class="btn btn-default">Februari</a>
				  <a href="data/bln/Maret2014.csv" class="btn btn-default">Maret</a>
				  <a href="data/bln/April2014.csv" class="btn btn-default">April</a>
				  <a href="data/bln/Mei2014.csv" class="btn btn-default">Mei</a>
				  <a href="data/bln/Juni2014.csv" class="btn btn-default">Juni</a>
				  <a href="data/bln/Juli2014.csv" class="btn btn-default">Juli</a>
				  <a href="data/bln/Agustus2014.csv" class="btn btn-default">Agustus</a>
				  <a href="data/kab/Bengkalis.csv" class="btn btn-default">Bengkalis</a>
				  <a href="data/kab/KotaDumai.csv"class="btn btn-default">Dumai</a>
				  <a href="data/kab/IndragiriHilir.csv" class="btn btn-default">Indragiri Hilir</a>
				  <a href="data/kab/IndragiriHulu.csv" class="btn btn-default">Indragiri Hulu</a>
				  <a href="data/kab/Kampar.csv" class="btn btn-default">Kampar</a>
				  <a href="data/kab/KuantanSingingi.csv" class="btn btn-default">Kuantan Singing</a>
				  <a href="/data/kab/KotaPekanBaru.csv" class="btn btn-default">Pekan Baru</a>
				  <a href="data/kab/Pelalawan.csv" class="btn btn-default">Pelalawan</a>
				  <a href="data/kab/RokanHilir.csv" class="btn btn-default">Rokan Hilir</a>
				  <a href="data/kab/RokanHulu.csv" class="btn btn-default">Rokan Hulu</a>
				  <a href="data/kab/Siak.csv" class="btn btn-default">Siak</a>				
            </div>
		</div>
    </section>
    <!-- About Section -->
    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Tentang SIGITA</h2>
                <p>SIGITA adalah sebuah Sistem Informasi Geografis (SIG) mengenai pemetaan titik api atau yang sering disebut juga Hotspot. Sistem informasi ini bertujuan sebagai salah satu media untuk mitigasi bencana kebakaran hutan.</p>
                <p>Data dari sistem ini didapatkan dari citra satelit MODIS yang tersedia di <a href="https://earthdata.nasa.gov/data/near-real-time-data/firms">NASA'S Earth Observing System Data and Information System (EOSDIS)</a>. Sedangkan untuk peta menggunakan <a href="http://openstreetmap.org/">OpenStreetMap</a>.</p>
                
            </div>
        </div>
    </section>
    
    <!-- About Riau Section -->
    <section id="about-riau" class="container content-section text-justify">
		<h2 class="media-heading" align="center">Tentang Propinsi Riau</h4>
        <div class="media">
			<div class="media-left media-top">
				<a href="#">
				<img class="media-object" src="img/Lambang_propinsi_riau.gif" alt="..." height="170px">
				</a>
			</div>
			<div class="media-body">
				<p>Secara etimologi, kata Riau berasal dari bahasa Portugis, “Rio”, yang berarti sungai. Pada tahun 1514, terdapat sebuah ekspedisi militer Portugis dengan menulusuri Sungai Siak dengan tujuan mencari lokasi kerajaan yang mereka yakini berada pada kawasan tersebut, dan sekaligus mengejar pengikut Sultan Mahmud Syah yang melarikan diri setelah kejatuhan Malaka. Pada masa kejayaan Kesultanan Siak Sri Inderapura yang didirikan oleh Raja Kecil, Riau dirujuk hanya kepada wilayah yang dipertuan muda (Raja Bawahan Johor) di Pulau Penyengat. Wilayah tersebut kemudian menjadi wilayah Residentie Riouw pemerintahan Hindia-Belanda yang berkedudukan di Tanjung Pinang; dan Riouw oleh masyarakat setempat dieja menjadi Riau. </p>
				<p>Pada awal kemerdekaan Indonesia, wilayah Kesultanan Siak Sri Inderapuradan Residentie Riouw dilebur dan tergabung dalam Provinsi Sumatera yang berpusat di Bukit Tinggi. Kemudian Provinsi Sumatera dimekarkan menjadi tiga Provinsi, yakni Sumatera Utara, Sumatera Tengah, dan Sumatera Selatan. Dominannya Etnis Minangkabau dalam Pemerintahan Sumatera Tengah, menuntut masyarakat Riau membentuk provinsi tersendiri. Selanjutnya pada tahun 1957, berdasarkan Undang-undang Darurat Nomor 19 tahun 1957, Provinsi Sumatera Tengah dimekarkan menjadi tiga provinsi, yaitu, Riau, Jambi, dan Sumatera Barat. Kemudian berdasarkan Kepmendagri nomor Desember 52/I/44-25, pada tanggal 20 Januari 1959, Pekanbaru resmi menjadi Ibu Kota Provinsi Riau menggantikan Tanjung Pinang.</p>
			</div>
		</div>
    </section>
    
    <!--about Data Citra-->
    <section id="datatitik" class="container content-section">
		<h2 align="center">Data Citra Satelit MODIS</h2>
		 <div class="panel-group panel-default alert alert-info">
          <div class="panel">
              <div class="panel-body">                         
                  <span>OVERVIEW</span>
                  <div class="table-responsive">
                  <table class="table table-striped">                          
                    <tr>
                      <th>Attribute</th>
                      <th>Short Description</th>
                      <th>Long Description</th>
                    </tr>
                    <tr>
                      <td>Latitude</td>
                      <td>Latitude</td>
                      <td>Center of 1km fire pixel but not necessarily the actual location
                      of the fire as one or more fires can be detected within the 1km 
                      pixel.</td>
                    </tr>
                    <tr>
                      <td>Longitude</td>
                      <td>Longitude</td>
                      <td>Center of 1km fire pixel but not necessarily the actual location
                      of the fire as one or more fires can be detected within the 1km 
                      pixel.</td>
                    </tr>
                    <tr>
                      <td>Brightness</td>
                      <td>Brightness temperature 21 (Kelvin)</td>
                      <td>Channel 21/22 brightness temperature of the fire pixel 
                      measured in Kelvin.</td>
                    </tr>
                    <tr>
                      <td>Scan</td>
                      <td>Along Scan pixel size</td>
                      <td>The algorithm produces 1km fire pixels but MODIS pixels get
                      bigger toward the edge of scan. Scan and track reflect actual 
                      pixel size.</td>
                    </tr>
                    <tr>
                      <td>Track</td>
                      <td>Along Track pixel size</td>
                      <td>The algorithm produces 1km fire pixels but MODIS pixels get
                      bigger toward the edge of scan. Scan and track reflect actual 
                      pixel size.</td>
                    </tr>
                    <tr>
                      <td>Acq_Date</td>
                      <td>Acquisition Date</td>
                      <td>Data of MODIS acquisition.</td>
                    </tr>
                    <tr>
                      <td>Act_time</td>
                      <td>Acquisition Time</td>
                      <td>Time of acquisition/overpass of the satellite (in UTC).</td>
                    </tr>
                    <tr>
                      <td>Satelite</td>
                      <td>Satelite</td>
                      <td>A = Aqua and T = Terra.</td>
                    </tr>
                    <tr>
                      <td>Confidence</td>
                      <td>Confidence (0-100%)</td>
                      <td>This value is based on a collection of intermediate algorithm
                      quantities used in the detection process. It is intended to 
                      help users gauge the quality of individual hotspot/fire pixels. 
                      Confidence estimates range between 0 and 100% and are 
                      assigned one of the three fire classes (low-confidence fire, 
                      nominal-confidence fire, or high-confidence fire).</td>
                    </tr> 
                    <tr>
                      <td>Version</td>
                      <td>Version (Collection and source)</td>
                      <td>Version identifies the collection (e.g. MODIS Collection 5) and
                      the source of Level 1B data used to make the Level 2 product. 
                      The source for MCD14DL are near real-time data processed 
                      by LANCE FIRMS; this is indicated by .0 after the collection 
                      e.g. Version 5.0. MCD14ML are from MODAPS, these are 
                      standard/science quality data, processed by the University 
                      of Maryland (with a 3 month lag) and distributed by FIRMS; 
                      indicated by .1 after the collection e.g. Version 5.1. Find out 
                      more on collections and on the differences between FIRMS 
                      data sourced from LANCE FIRMS and University of Maryland.</td>
                    </tr>
                    <tr>
                      <td>Bright_T31</td>
                      <td>Brightness temperature 31 (Kelvin)</td>
                      <td>Channel 31 brightness temperature of the pixel measured in Kelvin</td>
                    </tr>
                    <tr>
                      <td>FRP</td>
                      <td>Fire Radiative Power (MW - megawatts)</td>
                      <td>Decipts teh pixel-integrated fire radiateive power in MW (megawatts)</td>
                    </tr>
                  </table>
                  </div>                
           </div>                          
         </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Kontak Kami</h2>
                <form id="contact-form block-shadow" method="post" action="input_komen.php">
                  <div class="well well-sm">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="name">Name:</label>
                          <input type="text" name="txt_nama" class="form-control" id="txt_nama">
                        </div>
                        <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="text" name="txt_email" class="form-control" id="txt_email">
                        </div>
                      </div>
                      <div class="col-md-8">
                        <label for="pesan" color="black">Message:</label>
                        <textarea class="form-control" name="txt_pesan" rows="8" id="txt_pesan"></textarea>
                      </div>
                      <div class="col-md-12">
                        <p>
                          <button type="submit" class="btn btn-primary pull-right" data-dismiss="modal" id="submit">Kirim</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
                <ul class="list-inline banner-social-buttons">
                    <li>
                        <a href="https://github.com/syaimif/sigita" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
   
    <!-- Login Modal -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
			<div class="modal-dialog">
				<div class="modal-content">

					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="title" id="MyModalLabel">Log in</h4>
					</div> <!-- /.modal-header -->

					<div class="modal-body">
							<form method="post" action="cek_login.php">
							<input class="masuk" type="text" autocomplete="off" placeholder="Username .." name="txt_user"><br/>
							<input class="masuk" type="password" autocomplete="off" placeholder="Password .." name="txt_pass"><br/>
						<input id="tombol" type="submit" value="Login">
                        </form>
					</div> <!-- /.modal-body -->

				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->        
	
	<!---Modal info--->
	<div class="modal fade" id="info">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 align="center">Cara Menggunakan SIGITA</h4>
				</div>
				<div class="modal-body">
					<h5>Melihat Peta</h5>
					<h6>Untuk melihat peta gunakan fungsi-fungsi yang ada di dalam peta tersebut diantaranya
					ikon -+ untuk zoom-in dan zoom out peta, klik layer yang dipilih untuk menampilkan sebaran titik api yang diinginkan.
					Klik titik api untuk melihat detail informasi dari titik api tersebut mulai dari suhu permukaan, tanggal kejadian, titik koordinat, dan lain sebagainya untuk lebih detail klik Menu Data Titik Api.
					<h5>Melihat jumlah titik api</h5>
					<h6>untuk melihat jumlah titik api pada tiap-tiap kabupaten atau bulan klik Menu titik Api -> Summary</h6>
					<h5>Mengunduh Data Titik Api</h5>
					<h6>Anda dapat mengunduh data titik api (format.csv) tiap-tiap kabupaten maupun bulan, Klik menu titik Api -> Unduh Data. Kemudian klik button (sesuai nama kabupaten atau bulan)</h6>
					<h5>Mengirimkan kritik dan saran</h5>
					<h6>Anda dapat mengirimkan kritik dan saran dengan memanfaatkan menu kontak kami, Klik Kontak kami</h6>			
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	
    <!-- Footer -->
    <footer>
        <div class="container text-center">
            <p>Copyright &copy; Muhammad Miftakhul Syaikhuddin 2015</p>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="js/jquery.easing.min.js"></script>

    <!-- Google Maps API Key - Use your own API key to enable the map feature. More information on the Google Maps API can be found at https://developers.google.com/maps/ -->
    

    <!-- Custom Theme JavaScript -->
    <script src="js/grayscale.js"></script>

</body>

</html>
