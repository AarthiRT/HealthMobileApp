var graphController = healthStatusApp.controller(
		"graphCtrl",
		function($scope) {
			$scope.labels = ['10','20','30','40','50','60','70','80','90','100','110','120'];
			$scope.series = [ 'Today', 'Avg' ];

			$scope.data = [ [ 60, 30, 20, 35, 40, 38, 50, 70, 50, 20, 30, 40 ],
			                [ 15, 12, 10, 15, 20, 18, 15, 16, 12, 25, 35, 30 ] ];
			$scope.colors = [ '#46EEE1','#DCDCDC'];
			$scope.options = {
					/*title: {
						display: true,
						position:'top',
						fontFamily:'Gill Sans Extrabold, sans-serif',
						fontColor: '#A0A0A0',
						text: 'Moving Activity'
					},*/
					legend: {
						display: true,
						position:'right',
						labels : {
							fontColor: '#A0A0A0'
						}
					},
					elements: { point: { radius: 0 } },
					scales : {
						xAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
						yAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
					}			        
			};

		});


var tempGraphController = healthStatusApp.controller(
		"tempGraph",
		function($scope) {
			$scope.labels = ['10','20','30','40','50','60','70','80','90','100','110','120'];
			$scope.data = [ [ 60, 30, 20, 35, 40, 38, 50, 70, 50, 20, 30, 40 ] ];
			$scope.colors = [{backgroundColor:"rgba(0, 0, 0, 0)" ,borderColor: '#FF5733'}];
			$scope.options = {
					elements: { point: { radius: 0 } },
					scales : {
						xAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
						yAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
					}			        
			};

		});

var tempGraphController = healthStatusApp.controller(
		"calGraph",
		function($scope) {
			$scope.labels = ['10','20','30','40','50','60','70','80','90','100','110','120'];
			$scope.data = [ [  50, 70, 50, 20, 30, 40, 60, 30, 20, 35, 40, 38 ] ];
			$scope.colors = [{backgroundColor:"rgba(0, 0, 0, 0)" ,borderColor: '#22DCEE'}];
			$scope.options = {
					elements: { point: { radius: 0 } },
					scales : {
						xAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
						yAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
					}			        
			};

		});

var tempGraphController = healthStatusApp.controller(
		"heartGraph",
		function($scope) {
			$scope.labels = ['10','20','30','40','50','60','70','80','90','100','110','120'];
			$scope.data = [ [  50, 20, 50, 20, 50, 20, 50, 20, 50, 20, 50, 20 ] ];
			$scope.colors = [{backgroundColor:"rgba(0, 0, 0, 0)" ,borderColor: '#B513C8'}];
			$scope.options = {
					elements: { point: { radius: 0 } },
					scales : {
						xAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
						yAxes : [ {
							display:false,
							gridLines : {
								color : "rgba(0, 0, 0, 0)",
							}
						} ],
					}			        
			};

		});