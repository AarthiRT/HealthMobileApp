var graphController = weightStatusApp.controller(
		"graphCtrl",
		function($scope) {
			$scope.labels = ['','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP'];
			$scope.data = [ [ 100, 95, 90, 95, 92, 90, 85, 88, 84]];
			$scope.colors = [ '#46EEE1'];
			$scope.options = {
					elements: { point: { radius: 0 },
								line: { tension: 0 }},
					scales : {
						xAxes : [ {
							display:true,
							position:'top',
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

