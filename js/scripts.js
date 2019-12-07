var mymap = L.map('mapid').setView([29.59, -82.32], 10.5);

L.tileLayer('https://api.mapbox.com/styles/v1/brittneyjm8/ck36oz7ua0kuk1cpivc8uplqt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpdHRuZXlqbTgiLCJhIjoiY2syeGdzeXQwMGM4bzNnbjE4eDV0MnYxcSJ9.BfRJ6EfLRUXU5G9SqI9F5g', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([29.600950, -82.304615]).addTo(mymap);
let marker2 = L.marker([29.619668, -82.326422]).addTo(mymap);
let marker3 = L.marker([29.6367, -82.2377]).addTo(mymap);
let marker4 = L.marker([29.618, -82.2545]).addTo(mymap);
let marker5 = L.marker([29.6192557,-82.4148423]).addTo(mymap);
let marker6 = L.marker([29.5473, -82.2923]).addTo(mymap);
let marker7 = L.marker([29.5569, -82.3297]).addTo(mymap);
let marker8 = L.marker([29.621933, -82.307606]).addTo(mymap);

marker1.bindPopup("<b>La Chua Trail (Paynes Prairie Preserve)</b><br>Number of bird species: 267").openPopup();
marker2.bindPopup("<b>Sweetwater Wetlands Park</b><br>Number of bird species: 249");
marker3.bindPopup("<b>Palm Point Park (Newnans Lake)</b><br>Number of bird species: 237");
marker4.bindPopup("<b>Earl P. Powers Park (Newnans Lake)</b><br>Number of bird species: 218");
marker5.bindPopup("<b>Chapmans Pond</b><br>Number of bird species: 215");
marker6.bindPopup("<b>Cones Dike Trail (Paynes Prairie Preserve)</b><br>Number of bird species: 215");
marker7.bindPopup("<b>Bolen Bluff Trail (Paynes Prairie Preserve)</b><br>Number of bird species: 207");
marker8.bindPopup("<b>Gainesville-Hawthorne Trail (North)</b><br>Number of bird species: 204");


// onclick functions!
let birdText = document.querySelectorAll('.descrip');
let birdPic = document.querySelectorAll('.picture');

// function to hide all divs
function hideAll() {
	let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if (width > 600) {
		birdText.forEach(function(el) {
	    el.style.visibility = 'hidden';
	  })
	}  else {
		birdText.forEach(function(el) {
	    el.style.display = 'none';
	  })
	}
}

// run that function right away
hideAll();

// when any animal is clicked, make the suitable div appear
birdPic.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div
	let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width > 600) {
    switch (e.target.getAttribute('id')) {
      case 'bobwhitePic':
        document.querySelector('#bobwhiteText')
        	.style.visibility = 'visible';
        break;
      case 'loggerheadPic':
        document.querySelector('#loggerheadText')
        	.style.visibility = 'visible';
        break;
      case 'kestrelPic':
        document.querySelector('#kestrelText')
        .style.visibility = 'visible';
        break;
      case 'nighthawkPic':
        document.querySelector('#nighthawkText')
        .style.visibility = 'visible';
        break;
			case 'owlPic':
	       document.querySelector('#owlText')
	       .style.visibility = 'visible';
	       break;
    } // end of switch
	} else {
		switch (e.target.getAttribute('id')) {
      case 'bobwhitePic':
        document.querySelector('#bobwhiteText')
        	.style.display = 'block';
        break;
      case 'loggerheadPic':
        document.querySelector('#loggerheadText')
        	.style.display = 'block';
        break;
      case 'kestrelPic':
        document.querySelector('#kestrelText')
        .style.display = 'block';
        break;
      case 'nighthawkPic':
        document.querySelector('#nighthawkText')
        .style.display = 'block';
        break;
			case 'owlPic':
	       document.querySelector('#owlText')
	       .style.display = 'block';
	       break;
	}
} //end of if else

    // switch does not need default for this
let players = document.querySelectorAll('audio');
  players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
  } // end of function for clicking

}); // end of forEach()


Highcharts.chart('chart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Alachua County At-Risk Bird Population Totals (1995-99)'
    },
    subtitle: {
        text: 'Source: <a href=http://www.alachuaaudubon.org/local-birding-info/bird-counts/xmas/>Alachua Audubon Society</a>'
    },
    xAxis: {
        categories: ['Northern Bobwhite', 'Loggerhead Shrike', 'American Kestrel'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Species Totals',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1995',
        data: [21, 45, 80]
    }, {
        name: 'Year 1996',
        data: [2, 57, 57]
    }, {
        name: 'Year 1997',
        data: [17, 55, 40]
    }, {
        name: 'Year 1998',
        data: [0, 46, 56]
    }, {
        name: 'Year 1999',
        data: [1, 50, 55]
    }]
});
