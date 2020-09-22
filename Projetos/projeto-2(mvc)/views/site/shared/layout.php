<?php
	$url = $this->helpers['URLHelper']->getURL();
	$location = $this->helpers['URLHelper']->getLocation();
	// var_dump($url);
	// echo "<br>";
	// var_dump($location);
	// die;
?>
<html>
	<head>
		<meta charset="utf-8">
		<meta name= "keywords" content="HTML, CSS, JS, PHP">
		<meta name= "description" content="descrição do site">
		<meta name= "author" content="code universe">
		<meta name= "viewport" content="width=device-width, initial-scale=1.0">
		<meta name= "robots" content="index, follow"> 
		<title>projetos</title>
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/libs/bootstrap/css/bootstrap.min.css">
	</head>
	<body>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/libs/jquery/jquery-3.4.1.min.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/libs/bootstrap/js/bootstrap.min.js"></script>
		<header>
			<?php require 'header.php'; ?>
		</header>
		<main>
			<?php require $file; ?>
		</main>
		<footer>
			<?php require 'footer.php'; ?>
		</footer>
		<script type="text/javascript">
			var URL = "<?php echo $url; ?>";
			var helpers = {};
		</script>
	</body>
</html>
