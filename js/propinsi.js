var map = L.map('map', {
			zoomControl:true, maxZoom:19
		}).fitBounds([[-0.633891509434,100.099540094],[1.46538207547,104.121040094]]);
		var hash = new L.Hash(map);
		var additional_attrib = 'created w. <a href="https://github.com/geolicious/qgis2leaf" target ="_blank">qgis2leaf</a> by <a href="http://www.geolicious.de" target ="_blank">Geolicious</a> & contributors<br>';
		var feature_group = new L.featureGroup([]);
		var raster_group = new L.LayerGroup([]);
		var basemap_0 = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { 
			attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
		});	
		basemap_0.addTo(map);	
		var layerOrder=new Array();
		//bengkalis
			L.marker([1.40, 102.02]).addTo(map)
				.bindPopup('<b>Kabupaten Bengkalis</b>. <br> Jumlah titik api = 3552.')
				.openPopup();
				//dumai
			L.marker([1.74, 101.26]).addTo(map)
				.bindPopup('<b>Kota Dumai</b>. <br> Jumlah titik api = 732.')
				.openPopup();
				//indragiri hilir
			L.marker([-0.28, 103.18]).addTo(map)
				.bindPopup('<b>Kabupaten Indragiri Hilir</b> . <br> Jumlah titik api = 539.')
				.openPopup();
				//indragiri hulu
			L.marker([-0.52, 102.24]).addTo(map)
				.bindPopup('<b>Kabupaten Indragiri Hulu</b>. <br> Jumlah titik api = 161.')
				.openPopup();
				//kampar
			L.marker([0.14, 101.16]).addTo(map)
				.bindPopup('<b>Kabupaten Kampar</b>. <br> Jumlah titik api = 62.')
				.openPopup();
				//kuantan singing
			L.marker([-0.49, 101.469]).addTo(map)
				.bindPopup('<b>Kabupaten Kuantan Singingi</b>. <br> Jumlah titik api = 2.')
				.openPopup();
				//pelalawan
			L.marker([0.15, 102.42]).addTo(map)
				.bindPopup('<b>Kabupaten Pelalawan</b>. <br> Jumlah titik api = 1480.')
				.openPopup();
				//pekanbaru
			L.marker([0.55, 101.462]).addTo(map)
				.bindPopup('<b>Kota Pekanbaru</b>. <br> Jumlah titik api = 4.')
				.openPopup();
				//siak
			L.marker([0.76, 101.85]).addTo(map)
				.bindPopup('<b>Kabupaten Siak</b>. <br> Jumlah titik api = 2785.')
				.openPopup();
				//rokan hilir
			L.marker([1.646, 100.80]).addTo(map)
				.bindPopup('<b>Kabupaten Rokan Hilir</b>. <br> Jumlah titik api = 12.')
				.openPopup();
				//rokan hulu
			L.marker([0.82, 100.53]).addTo(map)
				.bindPopup('<b>Kabupaten Rokan Hulu</b>. <br> Jumlah titik api = 2.')
				.openPopup();	
		function pop_Siak(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_SiakJSON = new L.geoJson(exp_Siak,{
			onEachFeature: pop_Siak,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#d35400',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_SiakJSON);
		function pop_RokanHulu(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_RokanHuluJSON = new L.geoJson(exp_RokanHulu,{
			onEachFeature: pop_RokanHulu,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#000080',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_RokanHuluJSON);
		function pop_RokanHilir(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_RokanHilirJSON = new L.geoJson(exp_RokanHilir,{
			onEachFeature: pop_RokanHilir,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#ff00ff',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_RokanHilirJSON);
		function pop_Pelalawan(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_PelalawanJSON = new L.geoJson(exp_Pelalawan,{
			onEachFeature: pop_Pelalawan,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#9b59b6',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_PelalawanJSON);
		function pop_KuantanSinging(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_KuantanSingingJSON = new L.geoJson(exp_KuantanSinging,{
			onEachFeature: pop_KuantanSinging,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#ff9955',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_KuantanSingingJSON);
		function pop_KotaPekanBaru(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_KotaPekanBaruJSON = new L.geoJson(exp_KotaPekanBaru,{
			onEachFeature: pop_KotaPekanBaru,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#27ae60',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_KotaPekanBaruJSON);
		function pop_KotaDumai(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_KotaDumaiJSON = new L.geoJson(exp_KotaDumai,{
			onEachFeature: pop_KotaDumai,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#00ff00',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_KotaDumaiJSON);
		function pop_Kampar(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_KamparJSON = new L.geoJson(exp_Kampar,{
			onEachFeature: pop_Kampar,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#1abc9c',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_KamparJSON);
		function pop_IndragiriHulu(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_IndragiriHuluJSON = new L.geoJson(exp_IndragiriHulu,{
			onEachFeature: pop_IndragiriHulu,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#808000',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_IndragiriHuluJSON);
		function pop_IndragiriHilir(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_IndragiriHilirJSON = new L.geoJson(exp_IndragiriHilir,{
			onEachFeature: pop_IndragiriHilir,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#0000ff',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_IndragiriHilirJSON);
		function pop_Bengkalis(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_BengkalisJSON = new L.geoJson(exp_Bengkalis,{
			onEachFeature: pop_Bengkalis,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#f1c40f',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_BengkalisJSON);
		function pop_riau(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_riauJSON = new L.geoJson(exp_riau,{
			onEachFeature: pop_riau,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#e74c3c',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		
		//Layer per-Bulan Bos
		
		var layerOrder=new Array();
		function pop_Januari2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Januari2014JSON = new L.geoJson(exp_Januari2014,{
			onEachFeature: pop_Januari2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#666ac2',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_Januari2014JSON);
		function pop_Februari2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Februari2014JSON = new L.geoJson(exp_Februari2014,{
			onEachFeature: pop_Februari2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#eae385',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_Februari2014JSON);
		function pop_Maret2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Maret2014JSON = new L.geoJson(exp_Maret2014,{
			onEachFeature: pop_Maret2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#eb9172',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_Maret2014JSON);
		function pop_April2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_April2014JSON = new L.geoJson(exp_April2014,{
			onEachFeature: pop_April2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#4894ec',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_April2014JSON);
		function pop_Mei2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Mei2014JSON = new L.geoJson(exp_Mei2014,{
			onEachFeature: pop_Mei2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#ff3300',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_Mei2014JSON);
		function pop_Juni2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Juni2014JSON = new L.geoJson(exp_Juni2014,{
			onEachFeature: pop_Juni2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#ffff00',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_Juni2014JSON);
		function pop_Juli2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Juli2014JSON = new L.geoJson(exp_Juli2014,{
			onEachFeature: pop_Juli2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#ccff66',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_Juli2014JSON);
		function pop_Agustus2014(feature, layer) {					
			var popupContent = '<table><tr><th scope="row">LATITUDE</th><td>' + Autolinker.link(String(feature.properties['LATITUDE'])) + '</td></tr><tr><th scope="row">LONGITUDE</th><td>' + Autolinker.link(String(feature.properties['LONGITUDE'])) + '</td></tr><tr><th scope="row">BRIGHTNESS</th><td>' + Autolinker.link(String(feature.properties['BRIGHTNESS'])) + '</td></tr><tr><th scope="row">SCAN</th><td>' + Autolinker.link(String(feature.properties['SCAN'])) + '</td></tr><tr><th scope="row">TRACK</th><td>' + Autolinker.link(String(feature.properties['TRACK'])) + '</td></tr><tr><th scope="row">ACQ_DATE</th><td>' + Autolinker.link(String(feature.properties['ACQ_DATE'])) + '</td></tr><tr><th scope="row">ACQ_TIME</th><td>' + Autolinker.link(String(feature.properties['ACQ_TIME'])) + '</td></tr><tr><th scope="row">SATELLITE</th><td>' + Autolinker.link(String(feature.properties['SATELLITE'])) + '</td></tr><tr><th scope="row">CONFIDENCE</th><td>' + Autolinker.link(String(feature.properties['CONFIDENCE'])) + '</td></tr><tr><th scope="row">VERSION</th><td>' + Autolinker.link(String(feature.properties['VERSION'])) + '</td></tr><tr><th scope="row">BRIGHT_T31</th><td>' + Autolinker.link(String(feature.properties['BRIGHT_T31'])) + '</td></tr><tr><th scope="row">FRP</th><td>' + Autolinker.link(String(feature.properties['FRP'])) + '</td></tr><tr><th scope="row">NAMA_KAB</th><td>' + Autolinker.link(String(feature.properties['NAMA_KAB'])) + '</td></tr><tr><th scope="row">NAMA_PROP</th><td>' + Autolinker.link(String(feature.properties['NAMA_PROP'])) + '</td></tr></table>';
			layer.bindPopup(popupContent);
		}

		var exp_Agustus2014JSON = new L.geoJson(exp_Agustus2014,{
			onEachFeature: pop_Agustus2014,
			pointToLayer: function (feature, latlng) {  
				return L.circleMarker(latlng, {
					radius: 4.0,
					fillColor: '#33ffcc',
					color: '#000000',
					weight: 1,
					opacity: 1.0,
					fillOpacity: 1.0
				})
			}
		});
		//delete comment sign to show this layer on the map in the initial view.
		//feature_group.addLayer(exp_riauJSON);

		feature_group.addTo(map);
		var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Cari!',
		});
		osmGeocoder.addTo(map);
		var legend = L.control({position: 'bottomleft'});
		legend.onAdd = function (map) {
			var div = L.DomUtil.create('div', 'info legend');
			div.innerHTML +=
            '<img src="img/legend.png" alt="legend" width="134" height="147">';
    		return div;
		};
		legend.addTo(map);
	var baseMaps = {
		'OSM HOT': basemap_0
	};
		L.control.layers(baseMaps,{"Bengkalis": exp_BengkalisJSON,"IndragiriHilir": exp_IndragiriHilirJSON,"IndragiriHulu": exp_IndragiriHuluJSON,"Kampar": exp_KamparJSON,"KotaDumai": exp_KotaDumaiJSON,"KotaPekanBaru": exp_KotaPekanBaruJSON,"KuantanSingingi": exp_KuantanSingingJSON,"Pelalawan": exp_PelalawanJSON,"RokanHilir": exp_RokanHilirJSON,"RokanHulu": exp_RokanHuluJSON,"Siak": exp_SiakJSON},{collapsed:true}).addTo(map);
		L.control.layers(baseMaps,{"Riau": exp_riauJSON,"Agustus2014": exp_Agustus2014JSON,"Juli2014": exp_Juli2014JSON,"Juni2014": exp_Juni2014JSON,"Mei2014": exp_Mei2014JSON,"April2014": exp_April2014JSON,"Maret2014": exp_Maret2014JSON,"Februari2014": exp_Februari2014JSON,"Januari2014": exp_Januari2014JSON},{collapsed:true}).addTo(map);
		L.control.scale({options: {position: 'bottomleft',maxWidth: 100,metric: true,imperial: false,updateWhenIdle: false}}).addTo(map);
