import { Component } from '@angular/core';

@Component({
  selector: 'app-advertisers-dashboard',
  templateUrl: './advertisers-dashboard.component.html',
  styleUrls: ['./advertisers-dashboard.component.scss']
})
export class AdvertisersDashboardComponent {

  chart: any;
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{
		text: "Views"
	  },
	  axisY: {
		includeZero: true,
		labelFormatter: (e:any) => {
			var suffixes = ["", "K", "M", "B"];
 
			var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
			if(order > suffixes.length - 1)
				order = suffixes.length - 1;
 
			var suffix = suffixes[order];
			return (e.value / Math.pow(1000, order)) + suffix;
		}
	  },
	  axisY2: {
		includeZero: true,
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "column",
		showInLegend: true,
		name: "Views",
		yValueFormatString: "#,###",
		dataPoints: [
			{ label: "Jan", y: 250000 },
			{ label: "Feb", y: 431000 },
			{ label: "Mar", y: 646000 },
			{ label: "Apr", y: 522000 },
			{ label: "May", y: 464000 },
			{ label: "Jun", y: 470000 },
			{ label: "Jul", y: 534000 },
			{ label: "Aug", y: 407000 },
			{ label: "Sep", y: 484000 },
			{ label: "Oct", y: 465000 },
			{ label: "Nov", y: 424000 },
			{ label: "Dec", y: 231000 }
		]
	  },{
		type: "spline",
		showInLegend: true,
		name: "No of Taxis",
		axisYType: "secondary",
		dataPoints: [
			{ label: "Jan", y: 372 },
			{ label: "Feb", y: 412 },
			{ label: "Mar", y: 572 },
			{ label: "Apr", y: 224 },
			{ label: "May", y: 246 },
			{ label: "Jun", y: 601 },
			{ label: "Jul", y: 642 },
			{ label: "Aug", y: 590 },
			{ label: "Sep", y: 527 },
			{ label: "Oct", y: 273 },
			{ label: "Nov", y: 251 },
			{ label: "Dec", y: 331 }
		]
	  }]
	}	

	adData = [
		{
			title: "Advertisement 1",
			views: 2080,
			display: 234,
			img: "/assets/images/ex_img.png",
			img_alt: "ad_ex_thumbnail",
			status: "Active",
			status_style: "success"
		},
		{
			title: "Advertisement 2",
			views: 1353,
			display: 235,
			img: "/assets/images/ex_img.png",
			img_alt: "ad_ex_thumbnail",
			status: "Deactivate",
			status_style: "warning"
		},
		{
			title: "Advertisement 3",
			views: 6434,
			display: 764,
			img: "/assets/images/ex_img.png",
			img_alt: "ad_ex_thumbnail",
			status: "Awaiting",
			status_style: "primary"
		},
	]

}
