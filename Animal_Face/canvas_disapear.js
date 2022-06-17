$(document).ready(function () {
	$('.Predict_Button').toggle(
		function () {
			$('.myChart').fadeToggle(300);
		},
		function () {
			$('.myChart').fadeToggle(300);
		}
	);
});