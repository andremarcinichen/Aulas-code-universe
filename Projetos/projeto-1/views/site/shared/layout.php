<?php
	$url = $this->helpers['URLHelper']->getURL();
	$location = $this->helpers['URLHelper']->getLocation();
	// var_dump($url);
	// echo "<br>";
	// var_dump($location);
	// die;
?>

<!-- AQUI TU VAI CHARMAR TODOS OS ARQUIVOS DE CSS PARA O SITE -->

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name= "keywords" content="HTML, CSS, JS, PHP">
		<meta name= "description" content="descrição do site">
		<meta name= "author" content="code universe">
		<meta name= "viewport" content="width=device-width, initial-scale=1.0">
		<meta name= "robots" content="index, follow"> 
		<!-- palavras chaves no primeiro meta colocar VARIAS TAGS -->
		<!-- descrição no google -->
		<!-- view port para celular -->
		<!-- index flow sao subpginas para aparecer no google pode usar noindex ou nofollow ou nocontatos etc.... -->
		<title>projetos</title>
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/libs/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/libs/fontawesome/css/fontawesome.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/libs/fontawesome/css/brands.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/libs/fontawesome/css/solid.min.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/site/layout.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/site/home.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/site/contact.css">
		<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/site/quem_somos.css">
	</head>
	<body>
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
			var Helpers = {};
		</script>

		<script type="text/javascript" src="<?php echo $url; ?>/assets/libs/jquery/jquery-3.4.1.min.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/libs/popper/popper.min.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/libs/bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/libs/sweetalert2/dist/sweetalert2.all.min.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/js/site/layout.js"></script>
		<script type="text/javascript" src="<?php echo $url; ?>/assets/js/site/contact.js"></script>



	</body>
</html>
