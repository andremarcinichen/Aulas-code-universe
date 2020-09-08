<?php $url = $this->helpers['URLHelper']->getURL(); ?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
  	<title></title>
  	<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/libs/bootstrap-4.1.3-dist/css/bootstrap.min.css">
  	<link rel="stylesheet" type="text/css" href="<?php echo $url; ?>/assets/css/site/home.css">
  </head>
  <body>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="width: 60%">
	  <ol class="carousel-indicators">
	    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	  </ol>
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	      <img class="d-block w-100" src="assets/img/logo.jpg" alt="Primeiro Slide">
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="assets/img/logo2.jpg" alt="Segundo Slide">
	    </div>
	    <div class="carousel-item">
	    	<div class="d-block w-100" >
	    		<iframe class="mvideo" src="https://www.youtube.com/embed/0c4x1xjSQ44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    	</div>
	    </div>
	  </div>
	  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span class="sr-only">Anterior</span>
	  </a>
	  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	    <span class="carousel-control-next-icon" aria-hidden="true"></span>
	    <span class="sr-only">Próximo</span>
	  </a>
	</div>
  </body>
</html>