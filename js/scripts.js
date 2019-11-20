var mymap = L.map('mapid').setView([29.642873, -82.295238], 10.51);

L.tileLayer('https://api.mapbox.com/styles/v1/brittneyjm8/ck36oz7ua0kuk1cpivc8uplqt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpdHRuZXlqbTgiLCJhIjoiY2syeGdzeXQwMGM4bzNnbjE4eDV0MnYxcSJ9.BfRJ6EfLRUXU5G9SqI9F5g, {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);
