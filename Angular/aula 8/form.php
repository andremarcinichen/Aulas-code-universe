<!DOCTYPE html>
<html ng-app>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js"></script>
		<meta charset="utf-8">
		<title> angular</title>
		<style type="text/css">
			form.ng-pristine{
				background-color: lightblue;
			}
			form.ng-dirty{
				background-color: pink;
			}
		</style>
	</head>
	<body>
		<form name="myform">
			<input type="email" name="myinput" ng-model="myinput" required>	
		</form>
	</body>
</html>